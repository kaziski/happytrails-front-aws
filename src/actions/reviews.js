export const addTrailtoReview = reviewtrail => {
  return {
    type: 'ADD_TRAIL_TO_REVIEW',
    reviewtrail
    //reviewtrail is an obj of a trail
  }
}

export const setReview = data => {
  return {
    type: 'SET_REVIEW',
    review: data
  }
}

export const setMyReviews = reviewsData => {
  const reviews = reviewsData.data
  console.log("setMyReviews", reviews)
  return {
    type: 'SET_MY_REVIEWS',
    reviews
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
      .then(data => {
        if (data.error) {
          alert(data.error)
        } else {
          //! The review is saved in the backend. 
          //! After that, the review itself is not used right away.
          //! May be used to edit later. Do I need setReview?
          dispatch(setReview(data))
          console.log("data in saveReview", data)
        }
      })
      .catch(console.logs)
  }
}


export const getMyReviews = () => {
  // debugger
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
          console.log("reviewsObj in getMyReviews", reviewsObj)
          dispatch(setMyReviews(reviewsObj))
        }
      })
      .catch(console.logs)
  }
}
