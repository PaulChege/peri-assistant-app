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
  }

  render() {
    return (
      <View>
        <Text>
          {this.state.student.name}
        </Text>
        <Text>
          {this.state.student.institution}
        </Text>
        <Text>
          {this.state.student.mobile_number}
        </Text>
      </View>
    )
  } 
}
