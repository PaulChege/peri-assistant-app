import React from 'react'
import StudentForm  from '../forms/StudentForm'
import { connect } from 'react-redux';
import { addNewStudent } from '../redux/actions'
import PropTypes from 'prop-types'

class StudentCreateScreen extends React.Component {

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
    this.props.addNewStudent(
      formState.name,
      formState.institution,
      formState.mobile_number
    )
  }

  render (){
    return <StudentForm onSubmit={this.handleSubmit} error={this.props.err}/>
  }
}

const mapStateToProps = state => ({
  err: state.error.addStudentError,
  students: state.student.students
})

export default connect(mapStateToProps, {addNewStudent} )(StudentCreateScreen)