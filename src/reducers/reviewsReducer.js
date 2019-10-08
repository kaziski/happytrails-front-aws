const initialState = {
  //! Make sure the data type coming in matches the state data type
  reviewtrail: {},
  review: []
}


export default (state = initialState, action) => {
  console.log("In reviewsReducer action", action)
  switch (action.type) {
    case 'ADD_TRAIL_TO_REVIEW':
      return action.reviewtrail
    case 'SET_MY_REVIEWS':
      return action.reviewsData
    default:
      return state
  }
}

//* Reducer
