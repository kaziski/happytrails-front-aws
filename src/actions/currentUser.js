export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

//async action creators

export const login = credentials => {
  return dispatch => {
    console.log("credentials are", credentials)
    return fetch("http://localhost:3000/api/v1/login", {
      credentials: "include",
      method: "POST",
      // hearders: {
      //   "Content-Type": "application/json"
      // },
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
          dispatch(setCurrentUser(user))
        }
      })
      .catch(console.logs)
  }
}
