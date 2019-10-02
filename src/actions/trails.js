//* Action

// set trail to pass down to <TrailCard/>
export const setTrail = trailsData => {
  return {
    type: 'SET_TRAIL',
    trailsData
  }
}

//When a user clicks "save" on TrailCard, this gets triggered.
export const saveTrails = (trail, currentUser) => {
  return dispatch => {
    console.log("trail in saveTrails", trail)
    console.log("currentUser in saveTrails", currentUser)
    //the key trail is the required key in Trail strong params
    const trailInfo = {
      trail: { ...trail, user_id: currentUser.id }
    }
    return fetch("http://localhost:3000/api/v1/newtrail", {
      credentials: "include",
      method: "POST",
      headers: {
        Accept: 'application/json', "Content-Type":
          'application/json'
      },
      body: JSON.stringify(trailInfo)
    })
      .then(res => res.json())
      .then(trail => {
        if (trail.error) {
          alert(trail.error)
        } else {
          //! Should I do this or have this separate?
          dispatch(getTrails())
        }
      })
      .catch(console.logs)
  }
}

export const getTrails = currentUser => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/users/:user_id/trails", {
      credentials: "include",
      method: "GET",
      hearders: {
        "Content-Type": "application/json"
      },
    })
      .then(res => res.json())
      .then(trailsObj => {
        console.log("In getTrails - trailsObj", trailsObj)
      })
  }
}

// export const setMyTrails = 
