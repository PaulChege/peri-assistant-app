import React from 'react'
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView,  
} from 'react-navigation'
import {View, Text, StyleSheet} from 'react-native'
import {Button} from 'native-base'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import StudentListScreen from './screens/StudentListScreen'
import SignUpScreen from './screens/SignUpScreen'
import LoginScreen from './screens/LoginScreen'
import StudentCreateScreen from './screens/StudentCreateScreen'
import StudentDetailsScreen from './screens/StudentDetailsScreen'
import StudentEditScreen from './screens/StudentEditScreen'
import {store, persistor} from './redux/store'
import {Font} from 'expo'
import {LOG_OUT_REQUEST } from './redux/actions'
import { colors, commonStyles } from './styles/base'

const StudentStackNavigator = createStackNavigator({
  StudentList: { 
    screen: StudentListScreen,
  },
  StudentDetails: {
    screen: StudentDetailsScreen
  },
  StudentCreate: {
    screen: StudentCreateScreen,
    navigationOptions: {
      title: 'New Student',
    }
  },
  StudentEdit: {
    screen: StudentEditScreen
  }
},
{
  initialRouteName: 'StudentList',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
      fontFamily: 'quicksand-regular',
      fontWeight: '200'
    },
  }
})

const MainDrawer = createDrawerNavigator({
  Students: {
    screen: StudentStackNavigator
  }
},
{
  contentComponent: (props) => (
    <View style={{flex:1}}>
      <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          <DrawerItems {...props}
            labelStyle={styles.drawerLabels}
            activeBackgroundColor='rgba(0, 0, 0, .15)'
            inactiveBackgroundColor='transparent'
          />
          <Button light onPress={() => {this._handleLogout(props)}} >
            <Text style={styles.logoutButtonText}>
              Logout
            </Text>
          </Button>
      </SafeAreaView>
    </View>
  )
})

const AppNavigator = createSwitchNavigator({
  Login: LoginScreen,
  SignUp: SignUpScreen,
  Main: MainDrawer,
})

const AppContainer = createAppContainer(AppNavigator);

_handleLogout = async(props) => {
  store.dispatch({type: LOG_OUT_REQUEST})
  props.navigation.navigate('Login')
}

export default class App extends React.Component {
  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'quicksand-regular': require('./assets/fonts/Quicksand-Regular.ttf'),
    })
    this.setState({fontLoaded: true})
  }
  
  render() {
    return (
      this.state.fontLoaded ? (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
      ) : null
    )
  }
}

const styles = StyleSheet.create({
  logoutButtonText: {
    color: colors.primary,
    fontSize: 15,
    fontFamily: 'quicksand-regular',
    width: '100%',
    textAlign: 'left',
    paddingLeft: 15
  },
  drawerLabels:{
    color: colors.primary,
    fontSize: 15,
    fontFamily: 'quicksand-regular',
    fontWeight: 'normal'
  }
})

