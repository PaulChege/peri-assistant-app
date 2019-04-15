import React from 'react'
import {View, StyleSheet} from 'react-native'
import FlatListStudents from '../FlatListStudents'
import { connect } from 'react-redux'
import { Fab, Icon, Container, Button } from 'native-base'
import { colors, commonStyles } from '../styles/base'
import {fetchStudentsDetails} from '../redux/actions'

class StudentListScreen extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: 'My Students',
      headerLeft: (
      <Button iconLeft transparent
        onPress={()=> {navigation.openDrawer()}}
      >
        <Icon type="Feather" name="menu" style={commonStyles.drawerIcon} />
      </Button>
      )
    }
  }

  componentDidMount(){
    this._getStudents()
  }

  _getStudents = async() =>{
    await this.props.fetchStudentsDetails()
  }

  _navigateToAddStudentScreen = () => {
    this.props.navigation.navigate('AddStudent') 
  }

  handleOnSelectStudent = student => {
    this.props.navigation.navigate('StudentDetails', {student})
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          { this.props.students && 
          (
              <FlatListStudents 
                students = {this.props.students} 
                onSelectStudent={this.handleOnSelectStudent}
              />
          )}
          <Fab
            direction="up"
            style={styles.fab}
            position="bottomRight"
            onPress={this._navigateToAddStudentScreen}>
            <Icon name="md-add" />
          </Fab>
        </View>
        {/* <NavigationEvents onDidFocus={() => this._getStudents()} /> */}
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fab: {
    backgroundColor: colors.primary, 
  }
})

const mapStateToProps = state => ({
  students: state.student.students
})

export default connect(mapStateToProps, {fetchStudentsDetails})(StudentListScreen)