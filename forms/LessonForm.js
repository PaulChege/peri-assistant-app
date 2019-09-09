import React from 'react'
import {TextInput, KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native'
import {Button} from 'native-base' 
import {commonStyles, colors} from '../styles/base'

export default class LessonForm extends React.Component {
  state = {
    student_id: '',
    time: '',
    duration: '',
  }

  componentDidMount(){
    if (this.props.editState){
      this.setState(this.props.editState)
    }
  }
  getHandler = key => val => {
    this.setState({[key]: val})
  }

  handleTimeChange = this.getHandler('time')
  handleInstitutionChange = this.getHandler('duration')

  handleSubmit = () => {
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={commonStyles.error}>{this.props.error}</Text>
        <Text style={commonStyles.inputLabel}>
          Lesson Date and Time
        </Text>
        <TextInput
          value={this.state.time}
          style={commonStyles.textInputWithLabel}
          onChangeText ={this.handleTimeChange}
          underlineColorAndroid = {colors.primary}
          autoCapitalize="none"
        />

        <Text style={commonStyles.inputLabel}>
          Duration
        </Text>
        <TextInput 
          value={this.state.duration}
          style={commonStyles.textInputWithLabel}
          onChangeText={this.handleDurationChange}
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