import React from 'react'

const MyReview = ({ review }) => {
  //!need to attach onclick delete
  //edit as well?
  return (
    <>
      <article className="message">
        <div className="message-header has-background-white">
          <div className="has-text-primary"><a href={review.api_trail_url} target="_blank" rel="noopener noreferrer"><span class="icon is-small"><i class="fas fa-link"></i></span> {review.api_trail_name}</a></div>
          <div class="message-right">
            <button class="delete"></button>
          </div>
        </div>
        <div className="message-body has-background-white">
          {review.comment}
        </div>

      </article>
    </>
  );
}

export default MyReview