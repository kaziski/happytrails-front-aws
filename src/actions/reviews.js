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
    data
  }
}

export const setMyReviews = reviewsData => {
  const reviews = reviewsData.data
  return {
    type: 'SET_MY_REVIEWS',
    reviews
  }
}

//When a user clicks "Submit Review" on ReviewForm, this sends
//Post request to create a new review
export const saveReview = (comment, trail, currentUser) => {
  return dispatch => {

    let reviewData
    //associating trail reviewed with review using api_trail_id
    if (!trail.api_trail_id) {
      reviewData = {
        review: { comment, api_trail_id: trail.id, api_trail_name: trail.name, api_trail_url: trail.url, user_id: currentUser.id }
      }
    } else {
      reviewData = {
        review: { comment, api_trail_id: trail.api_trail_id, api_trail_name: trail.name, api_trail_url: trail.url, user_id: currentUser.id }
      }
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
          console.log({
            type: 'SET_REVIEW',
            review: data
          })
          // dispatch({
          //   type: 'SET_REVIEW',
          //   data
          // })
          dispatch(setReview(data))
        }
      })
      .catch(console.logs)
  }
}

//This gets all the reviews currentUser created
export const getMyReviews = () => {
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
