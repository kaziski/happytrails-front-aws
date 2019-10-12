export const addTrailtoReview = reviewtrail => {
  return {
    type: 'ADD_TRAIL_TO_REVIEW',
    reviewtrail
    //reviewtrail is an obj of a trail
  }
}


//When a user clicks "Submit Review" on ReviewForm, this sends
//Post request to create a new review
export const addReview = (comment, trail, currentUser) => {
  return dispatch => {
    let reviewData
    //associating trail reviewed with review using api_trail_id
    if (!trail.api_trail_id) {
      reviewData = {
        review: { comment, api_trail_id: trail.id, api_trail_name: trail.name, api_trail_url: trail.url, user_id: currentUser.id, username: currentUser.username }
      }
    } else {
      reviewData = {
        review: { comment, api_trail_id: trail.api_trail_id, api_trail_name: trail.name, api_trail_url: trail.url, user_id: currentUser.id, username: currentUser.username }
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
            type: 'ADD_SAVE_REVIEW',
            review: data
          })
          dispatch({
            type: 'ADD_SAVE_REVIEW',
            data
          })
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
          dispatch({
            type: 'GET_MY_REVIEWS',
            reviewsObj
          })
        }
      })
      .catch(console.logs)
  }
}

// export const deleteReview = review_id => {
//   return dispatch => {
//     return fetch("http://localhost:3000/api/v1/reviews", {

// export const deleteReview = (review_id, history) => {
//   return (dispatch) => {
//     fetch(`http://localhost:3000/api/v1/reviews/${review_id}`, {
//       // return fetch(`http://localhost:3000/api/v1/reviews/252`, {

//       credentials: "include",
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })


export const deleteReview = (review_id, history) => {
  console.log("review_id - ", review_id)
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/reviews/${review_id}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      // .then(review => console.log("review in action", review))
      .then(review => {
        if (review.error) {
          alert(review.error)
        } else {
          dispatch({
            type: 'DELETE_REVIEW',
            review
          })
          history.push(`/reviews`)
        }
      })
      .catch(console.logs)
  }
}
