import React from 'react'
import {View, StyleSheet, Text, TextInput} from 'react-native'
import PropTypes from 'prop-types'
import {Button} from 'native-base'
import {colors, commonStyles} from '../styles/base'
import {connect} from 'react-redux'
import {signUpUser} from '../redux/actions'


class SignUpScreen extends React.Component {
  static propTypes = {
    err: PropTypes.string,
    token: PropTypes.string,
    signUpUser: PropTypes.func,
  }

  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.token){
      this.props.navigation.navigate('Main')
    }
  }

  _signUp = async () => {
    this.props.signUpUser(
      this.state.name,
      this.state.email, 
      this.state.password,
      this.state.passwordConfirmation
    )
  }

  _navigateToLogin = () => {
    this.props.navigation.navigate('Login')
  }

  handleNameUpdate = name => {
    this.setState({name})
  }
  handleEmailUpdate = email => {
    this.setState({email})
  }

  handlePasswordUpdate = password => {
    this.setState({password})
  }

  handlePasswordConfirmationUpdate = passwordConfirmation => {
    this.setState({passwordConfirmation})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Peri Assistant</Text>
        <Text style={commonStyles.error}>{this.props.err}</Text>
        <View style={styles.formSection}>
          <TextInput
            placeholder="Full Name"
            value={this.state.name}
            onChangeText={this.handleNameUpdate}
            autoCapitalize="none"
            style={commonStyles.textInput}
            underlineColorAndroid = {colors.primary}
          />
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
          <TextInput
            placeholder="Confirm Password"
            value={this.state.passwordConfirmation}
            onChangeText={this.handlePasswordConfirmationUpdate}
            style={commonStyles.textInput}
            secureTextEntry
            underlineColorAndroid = {colors.primary}
          />
        </View>
       
        <View style={commonStyles.buttonSection}>
            <Button style={commonStyles.button} onPress={this._signUp} >
              <Text style={commonStyles.buttonText}>
                Sign Up
              </Text>
            </Button>
        </View>

        <View style={styles.footerSection}>
          <Text style={styles.signUpText}>
            Already have an account? 
          </Text>
          <Button transparent onPress={this._navigateToLogin}>
            <Text style={styles.signUpButtonText}>
              Log In
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
  err: state.error.signUpErr,
  token: state.user.token,
})

export default connect(mapStateToProps, {signUpUser})(SignUpScreen)