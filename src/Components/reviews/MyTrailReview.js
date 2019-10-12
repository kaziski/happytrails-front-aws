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
    let newlyCreatedReview
    newlyCreatedReview = this.props.reviews.currentUserReviews[this.props.reviews.currentUserReviews.length - 1]
    console.log('====================================');
    console.log("newlyCreatedReview.attributes.comment in MyTrailReview - ", newlyCreatedReview.attributes.comment);
    console.log("newlyCreatedReview.attributes.api_reviews.length MyTrailReview - ", newlyCreatedReview.attributes.api_reviews.length);
    // console.log("this.props.reviews.currentUserReviews.length", this.props.reviews.currentUserReviews.length, Date.now());
    // console.log("this.props.reviews.currentUserReviews in MyTrailReview", this.props.reviews.currentUserReviews);
    console.log('====================================');

    const reviewArr = this.props.reviews.currentUserReviews.review.attributes.api_reviews.map(review => {
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
        {reviewArr}
      </>
    )
  }
}

const mapStateToProps = state => ({ reviews: state.reviews })

export default connect(mapStateToProps)(MyTrailReview)
