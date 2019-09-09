import {logIn, signUp, addStudent, editStudent, fetchStudents, removeStudent, addLesson} from '../api'
import {store} from './store'
import {LOG_IN_FULFILLED, LOG_IN_REJECTED, 
  SIGN_UP_FULFILLED, SIGN_UP_REJECTED, 
  ADD_STUDENT_REJECTED, ADD_STUDENT_FULFILLED, 
  EDIT_STUDENT_REJECTED, EDIT_STUDENT_FULFILLED, 
  FETCH_STUDENTS_FULFILLED,
  REMOVE_STUDENT_FULFILLED, 
  ADD_LESSON_FULFILLED,
  ADD_LESSON_REJECTED} from './actionTypes'


// async action creator
export const logInUser = (email, password) => async dispatch => {
  try {
    const response = await logIn(email, password)
    dispatch({type: LOG_IN_FULFILLED, payload: response})
  } catch (err) {
    dispatch({type: LOG_IN_REJECTED, payload: err.message})
  }
}

export const signUpUser = (name, email, password, password_confirmation) => async dispatch => {
  try {
    const response = await signUp(name, email, password, password_confirmation) 
    dispatch({type: SIGN_UP_FULFILLED, payload: response})
  }
  catch (err) {
    dispatch({type: SIGN_UP_REJECTED, payload: err.message})
  }
}

export const fetchStudentsDetails = () => async dispatch => {
  const token = store.getState().user.token
  try{
    const response = await fetchStudents(token)
    dispatch({type: FETCH_STUDENTS_FULFILLED, payload: response})
  }
  catch(err){
    
  }
}

export const addNewStudent = (name, institution, mobile_number) => async dispatch => {
  const token = store.getState().user.token
  try{
    const response = await addStudent(token, name, institution, mobile_number)
    dispatch({type: ADD_STUDENT_FULFILLED, payload: response})
  }
  catch (err){
    dispatch({type: ADD_STUDENT_REJECTED, payload: err.message})
  }
}

export const editStudentDetails = (studentId, name, institution, mobile_number) => async dispatch => {
  const token = store.getState().user.token
  try{
    const response = await editStudent(token, studentId, name, institution, mobile_number)
    dispatch({type: EDIT_STUDENT_FULFILLED, payload: response})
  }
  catch (err){
    // TODO - Fix validation errors not showing
    dispatch({type: EDIT_STUDENT_REJECTED, payload: err.message})
  }
}


export const removeStudentRecord = (studentId) => async dispatch => {
  const token = store.getState().user.token
  try{
    const response = await removeStudent(token, studentId)
    dispatch({type: REMOVE_STUDENT_FULFILLED, payload: response})
  }
  catch(err){

  }
}

export const addNewLesson = (studentId, time, duration) => async dispatch => {
  const token = store.getState.user.token
  try{
    const response = await addStudent(token, studentId, time, duration)
    dispatch({type: ADD_LESSON_FULFILLED, payload: response})
  }
  catch(err){
    dispatch({type: ADD_LESSON_REJECTED, payload: err.message})
  }
}