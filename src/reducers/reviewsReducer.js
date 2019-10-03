const initialState = {
  //! Make sure the data type coming in matches the state data type
  trail: {},
  review: []
}


export default (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TRAIL_TO_REVIEW':
      return action.trail
    case 'SET_MY_REVIEWS':
      return action.reviewsData

    default:
      return state
  }
}

//* Reducer
