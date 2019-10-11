import React, { Component } from 'react'
import { connect } from 'react-redux'
import Review from './Review'
import { getMyReviews } from '../../actions/reviews'

class MyReviews extends Component {

  render() {
    alert('connected to my reviews!')
    console.log("this.props.reviews.currentUserReviews in MyReview", this.props.reviews.currentUserReviews)

    const reviewArr = this.props.reviews.currentUserReviews.map(review => {
      console.log("review.id", review.id);

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
        <p>{console.log("Hey!")}</p>
        {/* this is creating loop */}
        {reviewArr}
      </>
    )
  }

}

const mapStateToProps = state => ({ reviews: state.reviews })

// const mapStateToProps = (state) => {
//   debugger
//   return {
//     reviews: state.reviews
//   }
// }
//reviews is the name of the reducer. The name used here is 
//defined in App

export default connect(mapStateToProps, { getMyReviews })(MyReviews)