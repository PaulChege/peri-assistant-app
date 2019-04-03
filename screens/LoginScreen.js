import React from 'react'
import {View, StyleSheet, Text, TextInput} from 'react-native'
import {Button} from 'native-base'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {colors, commonStyles} from '../styles/base'
import {logInUser} from '../redux/actions'


class LoginScreen extends React.Component {
  static propTypes = {
    err: PropTypes.string,
    token: PropTypes.string,
    logInUser: PropTypes.func,
  }

  state = {
    email: '',
    password: '',
  }

  componentDidMount(){
    const token = this.props.token
    if (token){
      this.props.navigation.navigate('Main')
    }
  }

  
  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      this.props.navigation.navigate('Main')
    }
  }

  _login = async () => {
    this.props.logInUser(this.state.email, this.state.password)
  }

  _navigateToSignUp = () => {
    this.props.navigation.navigate('SignUp')
  }

  handleEmailUpdate = email => {
    this.setState({email})
  }

  handlePasswordUpdate = password => {
    this.setState({password})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={commonStyles.mainTitle}>Peri Assistant</Text>
        <Text style={commonStyles.error}>{this.props.err}</Text>
        <View style={styles.formSection}>
          <TextInput
            placeholder="Email"
            value={this.state.email}
            onChangeText={this.handleEmailUpdate}
            autoCapitalize="none"
            style={commonStyles.textInput}
            underlineColorAndroid = {colors.primary}
          />
          <TextInput
            placeholder="Password"
            value={this.state.password}
            onChangeText={this.handlePasswordUpdate}
            style={commonStyles.textInput}
            secureTextEntry
            underlineColorAndroid = {colors.primary}
          />
        </View>
       
        <View style={commonStyles.buttonSection}>
          <Button style={commonStyles.button} onPress={this._login} >
            <Text style={commonStyles.buttonText}>
              Login
            </Text>
          </Button>
        </View>

        <View style={styles.footerSection}>
          <Text style={styles.signUpText}>
            Don't have an account? 
          </Text>
          <Button transparent onPress={this._navigateToSignUp}>
            <Text style={styles.signUpButtonText}>
              Sign Up
            </Text>
          </Button>
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  formSection: {
    marginTop: 35,
  },
  signUpText: {
    paddingTop: 12,
    paddingHorizontal: 5,
  },
  signUpButtonText:{
    color: colors.primary,
  },
  error: {
    textAlign: 'center',
    color: 'red',
  },
  container: {
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 28,
  },
  footerSection: {
    marginTop: 30,
    justifyContent: 'center',
    flexDirection: 'row',
  }
})

const mapStateToProps = state => ({
  err: state.error.loginErr,
  token: state.user.token,
})

export default connect(mapStateToProps, {logInUser})(LoginScreen)
