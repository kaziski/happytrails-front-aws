
export const setTrails = trailsData => {
  console.log("action - setTrails- trailsData", trailsData);
  return (dispatch) => {
    dispatch({
      type: "SET_TRAILS",
      trailsData
    })
  }
}
// export const setTrails = trailsData => {
//   console.log("action - setTrails- trailsData", trailsData)
//   return {
//     type: SET_TRAILS,
//     trailsData
// 
// }

// }

// export const setFormDataForEdit = trip => {
//   const tripFormData = {
//     name: trip.attributes.name,
//     startDate: trip.attributes.start_date,
//     endDate: trip.attributes.end_date
//   }
//   return {
//     type: "SET_FORM_DATA_FOR_EDIT",
//     tripFormData
//   }
// }


// console.log("action - setTrails- trailsData", trailsData)
//   return {
//     type: "SET_TRAILS",
//     payload: trailsData
//   }
// export const setTrails = trailsData => {
//   console.log("action - setTrails- trailsData", trailsData)
//   return {
//     type: "SET_TRAILS",
//     trailsData
//   }

// }

//*action creator
// export const setMyTrips = trips => {
//   return {
//     type: "SET_MY_TRIPS",
//     trips
//   }
// }

// export const setFormDataForEdit = trip => {
//   const tripFormData = {
//     name: trip.attributes.name,
//     startDate: trip.attributes.start_date,
//     endDate: trip.attributes.end_date
//   }
//   return {
//     type: "SET_FORM_DATA_FOR_EDIT",
//     tripFormData
//   }
// }
