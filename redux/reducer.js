import {combineReducers} from 'redux'

import {LOG_IN_FULFILLED, LOG_IN_REJECTED, 
  SIGN_UP_FULFILLED, SIGN_UP_REJECTED, LOG_OUT_REQUEST, 
  ADD_STUDENT_REJECTED, ADD_STUDENT_FULFILLED, 
  EDIT_STUDENT_REJECTED, EDIT_STUDENT_FULFILLED, 
  FETCH_STUDENTS_FULFILLED,
  REMOVE_STUDENT_FULFILLED } from './actionTypes'

const merge = (prev, next) => Object.assign({}, prev, next)

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOG_IN_FULFILLED:
      return merge(state, {token: action.payload.token})
    case LOG_OUT_REQUEST:
      return {}
    case SIGN_UP_FULFILLED:
      return merge(state, { 
        userDetails: action.payload.user, 
        token: action.payload.token
      })
    default:
      return state
  }
}

const studentReducer = (state ={}, action) => {
  switch( action.type) {
    case FETCH_STUDENTS_FULFILLED:
      return merge(state, {students: action.payload})
    case ADD_STUDENT_FULFILLED:
      return merge(state, {students: [...state.students, action.payload]})
    case EDIT_STUDENT_FULFILLED:
      return merge(state, {students: action.payload })
    case REMOVE_STUDENT_FULFILLED:
      return merge(state, {students: action.payload})
    default:
      return state
  }
}

// Separate error reducer to prevent persisting of errors in state
const errorReducer = (state = {}, action) => {
  switch (action.type) {
    case LOG_IN_REJECTED:
      return merge(state, {loginErr: action.payload})
    case SIGN_UP_REJECTED:
      return merge(state, {signUpErr: action.payload})
    case ADD_STUDENT_REJECTED:
      return merge(state, {addStudentError: action.payload})
    case EDIT_STUDENT_REJECTED:
      return merge(state, {editStudentError: action.payload})
    default:
      return state
  }
}

const reducer = combineReducers({
  user: userReducer,
  error: errorReducer,
  student: studentReducer
})

export default reducer
