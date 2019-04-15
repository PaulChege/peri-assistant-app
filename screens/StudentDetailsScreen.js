import React from 'react'
import {View, Text} from 'react-native'
import {Thumbnail} from 'native-base'
import {commonStyles} from '../styles/base'
import {List, ListItem, Button} from 'native-base'
import {connect} from 'react-redux'
import {removeStudentRecord} from '../redux/actions'

class StudentDetailsScreen extends React.Component {
  
  state = {
    student: {}
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('student', {}).name,
    }
  }

  componentDidMount(){
    this._getStudentDetails()
  }

  componentWillReceiveProps(){
    this.props.navigation.navigate('StudentList')
  }
  
  _getStudentDetails = () =>{
    this.setState({student: this.props.navigation.getParam('student',{})})
  }

  handleRemove = () => {
    this.props.removeStudentRecord(this.state.student.id)
  }

  render() {
    return (
      <View>
        <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: 15}} >
          <Thumbnail square 
            style={{width: 75, height: 75}}
            source= {require('../assets/avatar.png')} />
        </View>

        <List style={{paddingRight: 8}}>
          <ListItem style={{flexDirection: 'column'}}>
            <Text style={commonStyles.infoLabel}>
              Name
            </Text>
            <Text style={commonStyles.infoText}>
              {this.state.student.name}
            </Text>
          </ListItem>

          <ListItem style={{flexDirection: 'column'}}>
            <Text style={commonStyles.infoLabel}>
              Institution
            </Text>
            <Text style={commonStyles.infoText}>
              {this.state.student.institution}
            </Text>
          </ListItem>

          <ListItem style={{flexDirection: 'column'}}>
            <Text style={commonStyles.infoLabel}>
              Mobile Number
            </Text>
            <Text style={commonStyles.infoText}>
              {this.state.student.mobile_number}
            </Text>
          </ListItem>
        </List>
        <View style={commonStyles.buttonSection}>
          <Button style={commonStyles.buttonRemove} onPress={this.handleRemove}>
            <Text style={commonStyles.buttonText}>
              Remove 
            </Text>
          </Button>
        </View>
      </View>
    )
  } 
}

const mapStateToProps = (state) => ({
  students: state.student.students
})

export default connect(mapStateToProps,{removeStudentRecord}) (StudentDetailsScreen)
