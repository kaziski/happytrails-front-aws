import React, { Component } from 'react';
import { connect } from 'react-redux'

class MyTrailReview extends Component {
  render() {
    console.log('====================================');
    console.log("this.props in MyTrailReview", this.props);
    console.log('====================================');
    debugger
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

const mapStateToProps = (state) => {
  console.log("state in MyTrailReview - mapstatetoprops", state)
  const { reviews } = state
  return { reviewList: reviews.allReviews }
  // const { todos } = state
  // return { todoList: todos.allIds }
}
// export default MyTrailReview
export default connect(mapStateToProps)(MyTrailReview)