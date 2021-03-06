import React from 'react'
import StudentForm  from '../forms/StudentForm'
import { connect } from 'react-redux';
import { editStudentDetails } from '../redux/actions'
import PropTypes from 'prop-types'

class StudentEditScreen extends React.Component {

  static propTypes = {
    err: PropTypes.string,
    students: PropTypes.array,
    addNewStudent: PropTypes.func
  }

  componentWillReceiveProps(nextProps){
    if(!nextProps.err){
      this.props.navigation.navigate('StudentList')
    }
  }

  handleSubmit = formState => {
    this.props.editStudentDetails(
      formState.id,
      formState.name,
      formState.institution,
      formState.mobile_number
    )
  }

  render (){
    return <StudentForm 
      editState={this.props.navigation.getParam('student', {})}
      onSubmit={this.handleSubmit} 
      error={this.props.err}/>
  }
}

const mapStateToProps = state => ({
  err: state.error.editStudentError,
  students: state.student.students
})

export default connect(mapStateToProps, {editStudentDetails} )(StudentEditScreen)