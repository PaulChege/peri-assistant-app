import React from 'react'
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView,  
} from 'react-navigation'
import {Button, View, ScrollView} from 'react-native'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import StudentListScreen from './screens/StudentListScreen'
import SignUpScreen from './screens/SignUpScreen'
import LoginScreen from './screens/LoginScreen'
import {store, persistor} from './redux/store'
import {Font} from 'expo'
import {LOG_OUT_REQUEST } from './redux/actions';
import AddStudentScreen from './screens/AddStudentScreen';
import { colors } from './styles/base';

const StudentStackNavigator = createStackNavigator({
  StudentList: { 
    screen: StudentListScreen,
    navigationOptions: {
      title: 'My Students',
    }
  },
  AddStudent: {
    screen: AddStudentScreen,
    navigationOptions: {
      title: 'New Student',
    }
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
          <DrawerItems {...props} />
          <Button title="Logout" onPress={() => {this._handleLogout(props)}}/>
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
