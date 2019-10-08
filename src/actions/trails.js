// set trail to pass down from <GeoForm/> to <TrailCards/>
export const setTrail = trailsData => {
  return {
    type: 'SET_TRAIL',
    trailsData
  }
}

//This gets dispatched in getTrails 
export const setMyTrails = trailsObj => {
  const trails = trailsObj.data
  // console.log("setMyTrails trails", trails)
  return {
    type: 'SET_MY_TRAILS',
    trails
  }
}


//When a user clicks "save" on TrailCards, this gets triggered.
//Sends a post request to create a new trail
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
        // console.log("trail after fetch in saveTrails", trail);

        if (trail.error) {
          alert(trail.error)
        } else {
          //? This may not be necessary
          //! what do i put here if I don't want to do anything after saving?
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
