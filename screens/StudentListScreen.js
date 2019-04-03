import React from 'react'
import {View, StyleSheet} from 'react-native'
import FlatListStudents from '../FlatListStudents'
import {fetchStudents} from '../api'
import { connect } from 'react-redux';
import { Fab, Icon, Container } from 'native-base';
import { colors } from '../styles/base';
import {NavigationEvents} from 'react-navigation'

class StudentListScreen extends React.Component {
  state = {
    students: []
  }

  _getStudents = async() =>{
    const students = await fetchStudents(this.props.token)
    this.setState({students: students})
  }

  _navigateToAddStudentScreen = () => {
    this.props.navigation.navigate('AddStudent') 
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          { this.state.students && 
          (
              <FlatListStudents 
                students = {this.state.students} 
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
        <NavigationEvents onDidFocus={() => this._getStudents()} />
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
  token: state.user.token
})

export default connect(mapStateToProps)(StudentListScreen)