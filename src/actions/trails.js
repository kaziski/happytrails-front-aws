// set trail to pass down from <GeoForm/> to <TrailCards/>
export const setTrail = trailsData => {
  return {
    type: 'SET_TRAIL',
    trailsData
  }
}

//This gets dispatched in getSavedTrails 
// export const setMyTrails = trailsObj => {
//   const trails = trailsObj.data
//   return {
//     type: 'SET_MY_TRAILS',
//     trails
//   }
// }

//When a user clicks "save" on TrailCards, this gets triggered.
//Sends a post request to create a new trail
export const saveTrails = (trail, currentUser) => {
  return dispatch => {
    //the key trail is the required key in Trail strong params
    const trailInfo = {
      trail: { ...trail, user_id: currentUser.id, api_trail_id: trail.id }
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
          //!is this ok to dispatch another fetch???
          //if I don't. my trails says i have no trails saved.App
          //when should i fire this action?
          dispatch(getSavedTrails())
          console.log("trails - trail ", trail)
        }
      })
      .catch(console.logs)
  }
}

export const getSavedTrails = () => {
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
          console.log("trailsObj in getSavedTrails", trailsObj)
          dispatch({
            type: 'SET_MY_TRAILS',
            trailsObj
          })
        }
      })
      .catch(console.log)
  }
}
