import React from 'react'

const Review = ({ review }) => {
  return (
    <>
      <article className="message is-link">
        <div className="message-header">
          <p><a href={review.api_trail_url} target="_blank" rel="noopener noreferrer">{review.api_trail_name}</a></p>
        </div>
        <div class="message-body">
          {review.comment}
        </div>
      </article>
    </>

  );
}

export default Review