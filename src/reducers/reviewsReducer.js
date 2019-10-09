const initialState = {
  //addTrailtoReview adds the trail associated to reviewtrail
  reviewtrail: {},
  //trying to add reviews after getReviews -> setMyReviews
  reviews: [],
  review: {}
}


export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TRAIL_TO_REVIEW':
      return action.reviewtrail
    case 'SET_REVIEW':
      return action.review.data.attributes
    case 'SET_MY_REVIEWS':
      return action.reviewsData
    default:
      return state
  }
}

//* Reducer
