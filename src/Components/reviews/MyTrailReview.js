import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getMyReviews } from '../../actions/reviews'

class MyTrailReview extends Component {

  state = {}

  static getDerivedStateFromProps({ getMyReviews }) {
    getMyReviews()
    return null
  }
  // componentDidMount() {
  //   this.props.getMyReviews()
  // }
  render() {
    console.log('====================================');
    console.log("this.props.reviews.currentUserReviews.length", this.props.reviews.currentUserReviews.length, Date.now());
    console.log("this.props.reviewObj in MyTrailReview", this.props.reviewObj);
    console.log('====================================');

    // const { review } = this.props.reviewObj
    debugger
    // return (
    //   <p>f</p>
    // )


    return (
      <div>
        <h1>Hi!</h1>
        {/* <p>{this.props}</p> */}
      </div>
    );



  }
}

// const mapStateToProps = state => ({ allReviews: state.allReviews })
// key reviews is the name of the reducer store
// const mapStateToProps = ({ reviews }) => {
//   debugger
//   return {
//     reviews
//   }
// }
// const mapStateToProps = ({ reviews }) => {
//   return {
//     reviews
//   }
// }
// export default MyTrailReview

const mapStateToProps = state => ({ reviews: state.reviews })

export default connect(mapStateToProps, { getMyReviews })(MyTrailReview)
