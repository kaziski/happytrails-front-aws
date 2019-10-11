const initialState = {
  //from addTrailtoReview 
  trailReviewed: {},
  //setReview adds the review written in ReviewForm
  reviewObj: {},
  //an array of reviews of trail coming from serializer
  mySavedReviewArr: [],

  //trying to add reviews after getMyReviews -> setMyReviews
  //this might be []

  currentUserReviews: []
}


export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TRAIL_TO_REVIEW':
      return { ...state, trailReviewed: action.reviewtrail }
    case 'ADD_SAVE_REVIEW':

      console.log("action.data.data.attributess in reveiwsReducer", action.data.data)
      return { ...state, currentUserReviews: [...state.currentUserReviews, action.data.data] }

    case 'GET_MY_REVIEWS':
      // return { ...state, currentUserReviews: [action.reviewsObj.data] }
      return { currentUserReviews: action.reviewsObj.data }

    default:
      return state
  }
}

//* Reducer
