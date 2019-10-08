//* need form info here

export const addTrailtoReview = reviewtrail => {
  return {
    type: 'ADD_TRAIL_TO_REVIEW',
    reviewtrail
    //reviewtrail is an obj of a trail
  }
}


//synchronous actions
export const setMyReviews = reviewsData => {
  //reviewsData is an array of review objects
  return {
    type: 'SET_MY_REVIEWS',
    reviewsData
  }
}

//async actions

//When a user clicks "Submit Review" on ReviewForm, this sends
//Post request to create a new review
export const saveReview = (comment, trail, currentUser) => {
  return dispatch => {
    const reviewData = {
      review: { comment, api_trail_id: trail.id, api_trail_name: trail.name, api_trail_url: trail.url, user_id: currentUser.id }
    }
    return fetch("http://localhost:3000/api/v1/reviews", {
      credentials: "include",
      method: "POST",
      headers: {
        Accept: 'application/json', "Content-Type":
          'application/json'
      },
      body: JSON.stringify(reviewData)
    })
      .then(res => res.json())
      .then(review => {
        if (review.error) {
          alert(review.error)
        } else {
          console.log("review in saveReview", review)
          // dispatch(getReviews())
        }
      })
      .catch(console.logs)
  }
}


export const getReviews = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/reviews", {
      credentials: "include",
      method: "GET",
      hearders: {
        "Content-Type": "application/json"
      },
    })
      .then(res => res.json())
      .then(reviewsObj => {
        if (reviewsObj.error) {
          alert(reviewsObj.error)
        } else {
          console.log("reviewsObj in getReviews", reviewsObj)

          dispatch(setMyReviews(reviewsObj.data))
        }
      })
      .catch(console.logs)
  }
}
