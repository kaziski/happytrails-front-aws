import React, { Component } from 'react';
import { connect } from 'react-redux'
import TrailReview from './TrailReview'

class TrailReviews extends Component {

  render() {
    let newlyCreatedReviewObj
    newlyCreatedReviewObj = this.props.reviews.currentUserReviews[this.props.reviews.currentUserReviews.length - 1]

    console.log("newlyCreatedReviewObj.attributes.comment in TrailReviews - ", newlyCreatedReviewObj.attributes.comment);

    const reviewArr = newlyCreatedReviewObj.attributes.api_reviews.map(review => {

      return (
        <div>
          <TrailReview
            key={review.id}
            review={review}
          />
        </div>
      )
    })
    return (
      < >
        {reviewArr}
      </>
    )
  }
}

const mapStateToProps = state => ({ reviews: state.reviews })

export default connect(mapStateToProps)(TrailReviews)
