import React from 'react'
import { connect } from 'react-redux'

const Review = ({ review }) => {
  console.log("in Review review", review);

  // debugger
  return (
    <div className="has-text-white">
      <div>{review.comment}</div>
    </div>
  );
}



const mapStateToProps = state => ({ reviews: state.reviews })

export default connect(mapStateToProps)(Review)