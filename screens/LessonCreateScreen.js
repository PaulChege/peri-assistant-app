import React from 'react'
import LessonForm  from '../forms/LessonForm'
import { connect } from 'react-redux';
import { addNewLesson } from '../redux/actions'
import PropTypes from 'prop-types'

class LessonCreateScreen extends React.Component {

  static propTypes = {
    err: PropTypes.string,
    addNewLesson: PropTypes.func
  }

  componentWillReceiveProps(nextProps){
    if(!nextProps.err){
      this.props.navigation.navigate('StudentList')
    }
  }

  handleSubmit = formState => {
    this.props.addNewLesson(
      formState.time,
      formState.duration
    )
  }

  render (){
    return <LessonForm onSubmit={this.handleSubmit} error={this.props.err}/>
  }
}

const mapStateToProps = state => ({
  err: state.error.addLessonError,
  // students: state.student.students
})

export default connect(mapStateToProps, {addNewLesson} )(LessonCreateScreen)