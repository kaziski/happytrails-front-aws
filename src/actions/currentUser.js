import { resetLoginForm } from './loginForm'
import { resetSignupForm } from './signupForm'


//* Action


export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const signup = (credentials, history) => {
  return dispatch => {
    console.log("credentials are", credentials)
    const userInfo = {
      user: credentials
    }
    //this has to be nested for strong params to work
    return fetch("http://localhost:3000/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        Accept: 'application/json', "Content-Type":
          'application/json'
      },
      body: JSON.stringify(userInfo)
    })
      .then(res => res.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch(setCurrentUser(user))
          dispatch(resetSignupForm())
        }
      })
      .catch(console.logs)
  }
}

export const login = credentials => {
  return dispatch => {
    console.log("credentials are", credentials)
    return fetch("http://localhost:3000/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        Accept: 'application/json', "Content-Type":
          'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(res => res.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch(setCurrentUser(user))
          dispatch(resetLoginForm())
        }
      })
      .catch(console.logs)
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      hearders: {
        "Content-Type": "application/json"
      },
    })
      .then(res => res.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch(setCurrentUser(user.data.attributes))
        }
      })
      .catch(console.logs)
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER",
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch("http://localhost:3000/api/v1/logout", {
      credentials: "include",
      method: "DELETE"
    })
  }
}
