import React, { Component } from 'react';
import { connect } from 'react-redux'
import Review from './Review'

class MyTrailReview extends Component {

  //* this.props.reviews.currentUserReviews
  //* TO prent, I need to get the last review
  //* this.props.reviews.currentUserReviews[this.props.reviews.currentUserReviews.length -1]
  //let a
  //   a = this.props.reviews.currentUserReviews[this.props.reviews.currentUserReviews.length -1]
  // a.attributes.comment 
  //a.attributes.api_reviews <- this is an array check and see if there is and then iterate over it
  // the most recent one gets added to this, so when displaying, 
  //check if there is more than 1
  render() {
    let newlyCreatedReviewObj
    newlyCreatedReviewObj = this.props.reviews.currentUserReviews[this.props.reviews.currentUserReviews.length - 1]
    // newlyCreatedReview = this.props.reviews.currentUserReviews.attributes.api_reviews
    console.log('====================================');
    console.log("newlyCreatedReviewObj.attributes.comment in MyTrailReview - ", newlyCreatedReviewObj.attributes.comment);
    console.log("newlyCreatedReviewObj.attributes.api_reviews.length MyTrailReview - ", newlyCreatedReviewObj.attributes.api_reviews.length);
    // console.log("this.props.reviews.currentUserReviews.length", this.props.reviews.currentUserReviews.length, Date.now());
    // console.log("this.props.reviews.currentUserReviews in MyTrailReview", this.props.reviews.currentUserReviews);
    console.log('====================================');

    const reviewArr = newlyCreatedReviewObj.attributes.api_reviews.map(review => {
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
        {reviewArr}
      </>
    )
  }
}

const mapStateToProps = state => ({ reviews: state.reviews })

export default connect(mapStateToProps)(MyTrailReview)
