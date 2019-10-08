import React, { Component } from 'react'
import { connect } from 'react-redux'
import Review from './Review'
import { getReviews } from '../../actions/reviews'

class MyReviews extends Component {

  componentDidMount() {
    this.props.getReviews()
  }

  render() {
    console.log("this.props.reviews in MyReview", this.props.reviews)
    // const { reviewsArr } = this.props.reviews
    // const reviews = reviewsArr.map(review => {
    return (
      <div>hey</div>
    )
    // const reviews = this.props.reviews.map(review => {
    //   console.log("MyReviews-.attributes", review.id)
    //   return (
    //     <div>
    //       <Review
    //         key={review.id}
    //         review={review.attributes}
    //       />
    //     </div>
    //   )
    // })
    // return (
    //   < >
    //     {reviews}
    //   </>
    // )
  }
}

const mapStateToProps = state => ({ reviews: state.reviews })
//reviews is the name of the reducer. The name used here is 
//defined in App

export default connect(mapStateToProps, { getReviews })(MyReviews)