import React from 'react'

const Review = ({ review }) => {
  // debugger
  return (
    <div className="has-text-white">
      <div>{review.comment}</div>
    </div>
  );
}

export default Review