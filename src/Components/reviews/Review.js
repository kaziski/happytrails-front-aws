import React from 'react'

const Review = ({ review }) => {
  //* This is where to format to show all the reviews currentUser has

  console.log("review in Review", review)
  return (

    <article class="message is-primary">
      <div class="message-header">
        <p><a href={review.api_trail_url} target="_blank" rel="noopener noreferrer">{review.api_trail_name}</a></p>
      </div>
      <div class="message-body">
        {review.comment}

      </div>
    </article>

    // <div className="has-text-white">
    //   <div>{review.api_trail_name}, {review.api_trail_name}, {review.api_trail_url}</div>
    // </div>
  );
}

export default Review