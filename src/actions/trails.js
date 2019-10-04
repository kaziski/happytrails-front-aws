//* Action

// set trail to pass down from <GeoForm/> to <TrailCard/>
export const setTrail = trailsData => {
  return {
    type: 'SET_TRAIL',
    trailsData
  }
}

export const setMyTrails = trailsObj => {
  const trails = trailsObj.data
  console.log("setMyTrails trails", trails)
  return {
    type: 'SET_MY_TRAILS',
    trails
  }
}


//When a user clicks "save" on TrailCard, this gets triggered.
export const saveTrails = (trail, currentUser) => {
  return dispatch => {
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
        console.log("trail after fetch in saveTrails", trail);

        if (trail.error) {
          alert(trail.error)
        } else {
          console.log("trail in saveTrails", trail)
          //? This may not be necessary
          dispatch(getTrails())
        }
      })
      .catch(console.logs)
  }
}

export const getTrails = () => {
  return dispatch => {
    return fetch("http://localhost:3000//api/v1/trails", {

      credentials: "include",
      method: "GET",
      hearders: {
        "Content-Type": "application/json"
      },
    })
      .then(res => res.json())
      .then(trailsObj => {
        if (trailsObj.error) {
          alert(trailsObj.error)
        } else {
          console.log("trailsObj in getTrails", trailsObj)
          dispatch(setMyTrails(trailsObj))
        }
      })
      .catch(console.log)
  }
}
