import React, { Component } from 'react'
import { connect } from 'react-redux'
import Review from './Review'
import { getMyReviews } from '../../actions/reviews'

class MyReviews extends Component {

  render() {
    const reviewArr = this.props.reviews.currentUserReviews.map(review => {
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

export default connect(mapStateToProps, { getMyReviews })(MyReviews)