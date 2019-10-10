import React, { Component } from 'react';
import { connect } from 'react-redux'

class MyTrailReview extends Component {
  render() {
    // debugger
    return (
      <div>
        <h1>Hi!</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({ reviews: state.reviews })
// key reviews is the name of the reducer store
// const mapStateToProps = ({ reviews }) => {
//   debugger
//   return {
//     reviews
//   }
// }
// export default MyTrailReview
export default connect(mapStateToProps)(MyTrailReview)