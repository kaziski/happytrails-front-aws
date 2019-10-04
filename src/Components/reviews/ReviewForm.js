import React from 'react'
import { connect } from 'react-redux'

const ReviewForm = ({ trailToReview }) => {
  console.log('oy!')
  console.log(trailToReview)
  // debugger
  return (
    <div>
      <p className="has-text-white">Haya!</p>
    </div>
  );
};

//reviews is the name of the store.
//What's in the store can be named whatever we want such as trailToReview
const mapStateToProps = state => ({ trailToReview: state.reviews })

export default connect(mapStateToProps)(ReviewForm);