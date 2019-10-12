import React from 'react'
import { connect } from 'react-redux'
import { deleteReview } from "../../actions/reviews"

const MyReview = ({ review, review_id, history }) => {

  // const handleDelete = (review_id, history) => {
  //   alert('clicked')
  //   deleteReview(review_id, history)
  // }

  return (
    <>
      <article className="message">
        <div className="message-header has-background-white">
          <div className="has-text-primary"><a href={review.api_trail_url} target="_blank" rel="noopener noreferrer"><span className="icon is-small"><i className="fas fa-link"></i></span> {review.api_trail_name}</a></div>
          <div className="message-right">
            <button onClick={() => deleteReview(review_id, history)} className="delete"></button>
          </div>
        </div>
        <div className="message-body has-background-white">
          {review.comment}
        </div>

      </article>
    </>
  );
}

export default connect(null, { deleteReview })(MyReview)

