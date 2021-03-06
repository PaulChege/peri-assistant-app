
const host = 'http://192.168.42.127:3000/'

export const logIn = async (email, password) => {
  const response = await fetch(host + 'auth/login', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({email, password}),
  })

  if (response.ok) {
    const user = await response.json()
    return user
  }

  const errMessage = await response.json()
  throw new Error(errMessage.message)
}

export const signUp = async (name, email, password, password_confirmation) => {
  const response = await fetch(host + 'signup',{
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({name, email, password, password_confirmation})
  })

  if (response.ok){
    const user = await response.json()
    return user
  }

  const errMessage = await response.json()
  throw new Error(errMessage.message)
}

export const fetchStudents = async(token) => {

  const response = await fetch(host + 'students',{
    method: 'GET',
    headers: {
      'Authorization': token
    }
  })

  if (response.ok){
    const students = await response.json()
    return students
  }
}

export const addStudent = async(token, name, institution, mobile_number) => {
  const response = await fetch(host + 'students', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify({name, institution, mobile_number})
  })

  if (response.ok) {
    const student = await response.json()
    return student
  }

  const errMessage = await response.json()
  throw new Error(errMessage.message)
}

export const editStudent = async(token, studentId, name, institution, mobile_number) => {
  const response = await fetch( host + 'students/' + studentId, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({name, institution, mobile_number})
    }
  )

  if (response.ok){
    const student = await response.json()
    return student
  }
  const errMessage = await response.json()
  return new Error(errMessage.message)
}

export const removeStudent = async (token, studentId) => {
  const response = await fetch(host +'students/' + studentId, {
    method: 'DELETE',
    headers: {
      'Authorization': token
    }
  })

  if(response.ok){
    const students = await response.json()
    return students
  }
}


export const addLesson = async (token, studentId, time, duration) => {
  const response = await fetch(host + 'students/' + studentId + '/lessons', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify({time, duration})
  })

  if (response.ok) {
    const lesson = await response.json()
    return lesson
  }

  const errMessage = await response.json()
  throw new Error(errMessage.message)
}