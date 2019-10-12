import React from 'react'

const TrailReview = ({ review }) => {

  const dateArr = review.created_at.match(/[^T]*/g)
  const dateCreated = dateArr[0]
  return (
    <>
      <article className="message">
        <div className="message-header has-background-white">
          <div className="has-text-primary"><a href={review.api_trail_url} target="_blank" rel="noopener noreferrer"><span className="icon is-small"><i className="fas fa-link"></i></span> {review.api_trail_name}</a></div>
        </div>
        <div className="message-body has-background-white">
          {review.comment} - reviewed by {review.username} on {dateCreated}
        </div>

      </article>
    </>
  );
}

export default TrailReview