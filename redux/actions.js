import {logIn, signUp, addStudent, fetchStudents} from '../api'

// action types
export const LOG_IN_FULFILLED = 'LOG_IN_FULFILLED'
export const LOG_IN_REJECTED = 'LOG_IN_REJECTED'
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'
export const SIGN_UP_FULFILLED = 'SIGN_UP_SUCCESSFUL'
export const SIGN_UP_REJECTED = 'SIGN_UP_REJECTED'
export const FETCH_STUDENTS_FULFILLED = 'FETCH_STUDENTS_FULFILLED'
export const ADD_STUDENT_FULFILLED = 'ADD_STUDENT_FULFILLED'
export const ADD_STUDENT_REJECTED = 'ADD_STUDENT_REJECTED'


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

export const fetchStudentsDetails = (token) => async dispatch => {
  try{
    const response = await fetchStudents(token)
    dispatch({type: FETCH_STUDENTS_FULFILLED, payload: response})
  }
  catch(err){
    
  }
}

export const addNewStudent = (token, name, institution, mobile_number) => async dispatch => {
  try{
    const response = await addStudent(token, name, institution, mobile_number)
    dispatch({type: ADD_STUDENT_FULFILLED, payload: response})
  }
  catch (err){
    dispatch({type: ADD_STUDENT_REJECTED, payload: err.message})
  }
}