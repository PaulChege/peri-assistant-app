import React from 'react'
import {TextInput, KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native'
import {Button} from 'native-base' 
import {commonStyles, colors} from '../styles/base'

export default class AddStudentForm extends React.Component {
  state = {
    name: '',
    institution: '',
    mobile_number: ''
  }

  getHandler = key => val => {
    this.setState({[key]: val})
  }

  handleNameChange = this.getHandler('name')
  handleInstitutionChange = this.getHandler('institution')
  handleMobileNumberChange = this.getHandler('mobile_number')

  handleSubmit = () => {
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={commonStyles.error}>{this.props.error}</Text>
        <TextInput
          value={this.state.name}
          style={commonStyles.textInput}
          placeholder = "Full Name"
          onChangeText ={this.handleNameChange}
          underlineColorAndroid = {colors.primary}
          autoCapitalize="none"
        />
        <TextInput 
          value={this.state.institution}
          style={commonStyles.textInput}
          placeholder="Institution"
          onChangeText={this.handleInstitutionChange}
          underlineColorAndroid = {colors.primary}
          autoCapitalize="none"
        />
        <TextInput
          value={this.state.mobile_number}
          style={commonStyles.textInput}
          placeholder="Mobile number"
          keyboardType="numeric"
          onChangeText={this.handleMobileNumberChange}
          underlineColorAndroid = {colors.primary}
          autoCapitalize="none"
        />
        <View style={commonStyles.buttonSection}>
          <Button style={commonStyles.button} onPress={this.handleSubmit} >
            <Text style={commonStyles.buttonText}>
              Add Student
            </Text>
          </Button>
        </View>
      </KeyboardAvoidingView>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20
  }
})

