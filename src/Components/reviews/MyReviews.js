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

  state = { reviews: {} }

  static getDerivedStateFromProps({ getMyReviews }) {
    getMyReviews()
    //! It won't let me return anything else but null?
    return null
  }

  render() {
    // debugger
    console.log("this.props.reviews in MyReview", this.props.reviews)

    const { reviews } = this.props
    console.log("reviews in MyReview", reviews)
    console.log("this.state.reviews in MyReview", this.state.reviews);
    // debugger
    // const reviewArr = reviews.attributes.map(review => {
    //   debugger
    //   console.log("MyReviews-.attributes", review.attributes)

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
        <p>{console.log("Hey!")}</p>
        {/* this is creating loop */}
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

export default connect(mapStateToProps, { getMyReviews })(MyReviews)