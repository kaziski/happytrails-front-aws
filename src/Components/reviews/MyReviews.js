import React, { Component } from 'react'
import { connect } from 'react-redux'
import Review from './Review'

class MyReviews extends Component {

  render() {
    const { reviewsArr } = this.props.reviews
    const reviews = reviewsArr.map(review => {
      return (
        <div>
          <Review
            key={review.id}
            review={review}
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

const mapStateToProps = state => ({ reviews: state.myReviews })
//myReviews is the name of the reducer. The name used here is 
//defined in App

export default connect(mapStateToProps)(MyReviews)