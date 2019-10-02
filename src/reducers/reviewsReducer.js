export default (state = [], action) => {
  switch (action.type) {
    case 'SET_MY_REVIEWS':
      return action.reviewsData

    default:
      return state
  }
}

//* Reducer