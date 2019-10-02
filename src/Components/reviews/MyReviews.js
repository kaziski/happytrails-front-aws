import React, { Component } from 'react'
import { connect } from 'react-redux'
import Review from './Review'

class MyReviews extends Component {
  render() {
    // debugger
    // const { reviewsArr } = this.props.reviews
    // const reviews = reviewsArr.map(review => {
    const reviews = this.props.reviews.map(review => {
      console.log("MyReviews-.attributes", review.id)
      return (
        <div>
          <Review
            key={review.id}
            review={review.attributes}
          />
        </div>
      )
    })
    return (
      < >
        {reviews}
      </>
    )
  }
}

const mapStateToProps = state => ({ reviews: state.reviews })
//myReviews is the name of the reducer. The name used here is 
//defined in App

export default connect(mapStateToProps)(MyReviews)