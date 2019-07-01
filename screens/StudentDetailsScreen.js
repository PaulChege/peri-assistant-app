import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {commonStyles} from '../styles/base'
import {List, ListItem, Button, Icon} from 'native-base'
import {connect} from 'react-redux'
import {removeStudentRecord} from '../redux/actions'
import {colors} from '../styles/base'

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

  _navigateToStudentEditScreen = () => {
    this.props.navigation.navigate('StudentEdit',{student: this.state.student})
  }

  handleRemove = () => {
    this.props.removeStudentRecord(this.state.student.id)
  }

  render() {
    return (
      <View>

        <View style={styles.editButton}>
          <Button iconLeft transparent 
            onPress={this._navigateToStudentEditScreen}>
            <Icon type="AntDesign" name="edit" 
              style={{fontSize: 30, color: colors.primary}}/>
          </Button>
        </View>

        <View style={styles.avatar} >
          <Icon type="FontAwesome" name="user-circle" 
            style={{fontSize: 80, color: colors.primary}}/>
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

const styles = StyleSheet.create({
  editButton: {
    justifyContent: 'flex-end', 
    flexDirection: 'row',
    paddingVertical: 15,
    paddingRight: 15
  },
  avatar: { 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingVertical: 15
  }
})

const mapStateToProps = (state) => ({
  students: state.student.students
})

export default connect(mapStateToProps,{removeStudentRecord}) (StudentDetailsScreen)
