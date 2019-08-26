import React from 'react'
import {TextInput, KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native'
import {Button} from 'native-base' 
import {commonStyles, colors} from '../styles/base'

export default class StudentForm extends React.Component {
  state = {
    id: '',
    name: '',
    institution: '',
    mobile_number: ''
  }

  componentDidMount(){
    if (this.props.editState){
      this.setState(this.props.editState)
    }
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
        <Text style={commonStyles.inputLabel}>
          Full Name
        </Text>
        <TextInput
          value={this.state.name}
          style={commonStyles.textInputWithLabel}
          onChangeText ={this.handleNameChange}
          underlineColorAndroid = {colors.primary}
          autoCapitalize="none"
        />

        <Text style={commonStyles.inputLabel}>
          Institution
        </Text>
        <TextInput 
          value={this.state.institution}
          style={commonStyles.textInputWithLabel}
          onChangeText={this.handleInstitutionChange}
          underlineColorAndroid = {colors.primary}
          autoCapitalize="none"
        />

        <Text style={commonStyles.inputLabel}>
          Mobile Number
        </Text>
        <TextInput
          value={this.state.mobile_number}
          style={commonStyles.textInputWithLabel}
          keyboardType="numeric"
          onChangeText={this.handleMobileNumberChange}
          underlineColorAndroid = {colors.primary}
          autoCapitalize="none"
        />
        <View style={commonStyles.buttonSection}>
          <Button style={commonStyles.button} onPress={this.handleSubmit} >
            <Text style={commonStyles.buttonText}>
              Save 
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

