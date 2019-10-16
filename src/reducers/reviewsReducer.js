const initialState = {
  //from addTrailtoReview 
  trailReviewed: {},
  //setReview adds the review written in ReviewForm
  //TODO check if this is used
  reviewObj: {},
  //an array of reviews of trail coming from serializer
  mySavedReviewArr: [],

  currentUserReviews: []
}


export default (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TRAIL_TO_REVIEW':
      return { ...state, trailReviewed: action.reviewtrail }

    case 'ADD_SAVE_REVIEW':
      return { ...state, currentUserReviews: [...state.currentUserReviews, action.data.data] }

    case 'GET_MY_REVIEWS':
      return { currentUserReviews: action.reviewsObj.data }

    case 'DELETE_REVIEW':
      let newReviews = state.currentUserReviews.filter(review => review.id !== action.reviewId)
      return { ...state, currentUserReviews: newReviews }

    case 'CLEAR_MY_REVIEWS':
      return initialState

    default:
      return state
  }
}

