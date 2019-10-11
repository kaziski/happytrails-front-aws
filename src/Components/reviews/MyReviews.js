import React, { Component } from 'react'
import { connect } from 'react-redux'
import Review from './Review'
import { getMyReviews } from '../../actions/reviews'

class MyReviews extends Component {

  //I need to this initial state for getDerivedStateFromProps to work properly
  //how does this state work with mapStateToProps??
  //I'm probably not using getDerivedStateFromProps right.
  //do i need another store for reviews?
  //after form, create another component, getReviews and then pass the proos to this one?

  // state = { reviews: {} }

  // static getDerivedStateFromProps({ getMyReviews }) {
  //   getMyReviews()
  //   return null
  // }

  // componentDidMount() {
  //   this.props.getMyReviews()
  // }

  render() {
    alert('connected to my reviews!')
    console.log("this.props.reviews.currentUserReviews in MyReview", this.props.reviews.currentUserReviews)
    // const { reviews } = this.props

    // // const reviewArr = reviews.attributes.map(review => {
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