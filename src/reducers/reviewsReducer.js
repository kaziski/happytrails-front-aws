const initialState = {
  //from addTrailtoReview 
  trailReviewed: {},
  //setReview adds the review written in ReviewForm
  reviewObj: {},
  //an array of reviews of trail coming from serializer
  reviewsOfThisTrail: [],

  //trying to add reviews after getMyReviews -> setMyReviews
  //this might be []

  currentUserReviews: {}
}


export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TRAIL_TO_REVIEW':
      return { ...state, trailReviewed: action.reviewtrail }
    case 'SAVE_REVIEW':
      //* action.data.data.attributes - object of the current review
      //*action.data.data.attributes.api_reviews - an array of reviews that belong to the trail being reviewed
      // let additionalReview
      // additionalReview = state.allReviews
      // debugger
      // additionalReview.push(action.data.data.attributes)
      console.log("action.data.data.attributess in reveiwsReducer", action.data.data.attributes)
      return { ...state, reviewObj: action.data.data.attributes, reviewsOfThisTrail: action.data.data.attributes.api_reviews }

    // return { ...state, allReviews: additionalReview, review: action.data.data.attributes }
    case 'SET_MY_REVIEWS':
      return { ...state, currentUserReviews: action.reviews }
    default:
      return state
  }
}

//* Reducer
