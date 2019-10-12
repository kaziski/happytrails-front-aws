import React, { Component } from 'react'
import { connect } from 'react-redux'
import MyReview from './MyReview'
import { getMyReviews } from '../../actions/reviews'

class MyReviews extends Component {

  render() {
    const reviewArr = this.props.reviews.currentUserReviews.map(review => {
      return (
        <div>
          <MyReview
            key={review.id}
            review={review.attributes}
          />
        </div>
      )
    })
    return (
      <div className="has-text-white" >
        {this.props.reviews.currentUserReviews.length === 0 ? <h3>You haven't created any reviews</h3> : null}
        {reviewArr}
      </div>

    )
  }

}

const mapStateToProps = state => ({ reviews: state.reviews })

export default connect(mapStateToProps, { getMyReviews })(MyReviews)