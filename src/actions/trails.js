//* Action

// set trail to pass down to <TrailCard/>
export const setTrails = trailsData => {
  return {
    type: 'SET_TRAILS',
    trailsData
  }
}


export const saveTrails = (trail, currentUser) => {
  return dispatch => {
    console.log("trail in saveTrails", trail)
    console.log("currentUser in saveTrails", currentUser)
    //the key trail is the required key in Trail strong params
    //the value trail is what's passed into this component
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
      // .then(trail => console.log("in fetch addlikis- trail", trail)
      .then(trail => {
        if (trail.error) {
          alert(trail.error)
        } else {
          console.log(trail)
          //!trail is coming in! 
          //? this is where I dispatch another action, pass the trail
          //? to save trails?
        }
      })
      .catch(console.logs)
  }
}

// export const addLikes = trail => {
//   return {
//     type: 'ADD_LIKES',
//     trail
//   }
// }
//? Do I need this action if I'm saving each trail?

