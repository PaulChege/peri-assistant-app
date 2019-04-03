import React from 'react'
import {View, Text} from 'react-native'

export default class StudentDetailsScreen extends React.Component {
  state = {
    student: {}
  }

  componentDidMount(){
    this._getStudentDetails()
  }

  _getStudentDetails = () =>{
    this.setState({student: this.props.navigation.getParam('student',{})})
    // ToDo 
    // - Get Student details from API and not from state
  }


  render() {
    return (
      <View>
        <Text>
          {this.state.student.name}
        </Text>
      </View>
    )
  } 
}
