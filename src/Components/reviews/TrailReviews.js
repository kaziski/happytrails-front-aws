import React, { Component } from 'react';
import { connect } from 'react-redux'
import TrailReview from './TrailReview'

class TrailReviews extends Component {

  render() {

    let newlyCreatedReviewObj
    let trailName
    let trailUrl
    //TODO Fix this!!
    // when a new user create the first trail, it breaks.
    // if (this.props.reviews.currentUserReviews.length === 0) {
    //   //if the user hasn't made any reviews - do something
    // }
    newlyCreatedReviewObj = this.props.reviews.currentUserReviews[this.props.reviews.currentUserReviews.length - 1]
    // console.log("newlyCreatedReviewObj.attributes.comment in TrailReviews - ", newlyCreatedReviewObj.attributes.comment);
    trailName = newlyCreatedReviewObj.attributes.api_trail_name
    trailUrl = newlyCreatedReviewObj.attributes.api_trail_url
    const reviewArr = newlyCreatedReviewObj.attributes.api_reviews.map(review => {

      return (
        < >
          <TrailReview
            key={review.id}
            review={review}
          />
        </>
      )
    })
    return (
      <div className="has-background-white">
        <div className="is-size-4 has-text-weight-bold"><a href={trailUrl} target="_blank" rel="noopener noreferrer"><span className="icon is-small"><i className="fas fa-link"></i></span> {trailName}</a>
          {reviewArr}
        </div >
      </div>
    )
  }
}

const mapStateToProps = state => ({ reviews: state.reviews })

export default connect(mapStateToProps)(TrailReviews)
