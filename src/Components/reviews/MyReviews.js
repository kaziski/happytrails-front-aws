import React, { Component } from 'react'
import { connect } from 'react-redux'
import Review from './Review'
import { getReviews } from '../../actions/reviews'

class MyReviews extends Component {

  // componentDidMount() {
  //   console.log("componentDidMount");

  //   this.props.getReviews()
  // }

  render() {
    console.log("this.props.reviews in MyReview", this.props.reviews)
    const { reviews } = this.props
    console.log("reviews in MyReview", reviews)
    // debugger


    // const reviewArr = reviews.map(review => {
    //   console.log("MyReviews-.attributes", review.attributes)
    //   debugger
    //   return (
    //     <div>
    //       <Review
    //         key={review.id}
    //         review={review.attributes}
    //       />
    //     </div>
    //   )
    // })
    return (
      < >
        {/* {reviewArr} */}
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

export default connect(mapStateToProps, { getReviews })(MyReviews)