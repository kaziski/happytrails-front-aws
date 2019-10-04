import React from 'react'
import { connect } from 'react-redux'
import ReviewForm from '../reviews/ReviewForm'
import { saveTrails } from '../../actions/trails'
import { addTrailtoReview } from '../../actions/reviews'

const TrailCard = ({ trail, saveTrails, addTrailtoReview, currentUser, history }) => {

  const handleLikeClick = (event) => {
    event.preventDefault()
    saveTrails(trail, currentUser)
  }

  const handleReviewClick = (event) => {
    event.preventDefault()
    addTrailtoReview(trail)
    renderReview()
    //*why doesn't this work but look at Login component
    // history.push('/reviewform')
  }

  const renderReview = () => {
    alert('choi!')
    return (
      <form className="reviewForm" onSubmit={handleSubmit}>
        <input placeholder="review" value={reviewFormData.review} name="review" type="text" onChange={handleInputChange} />

      </form>
    )
  }


  return (
    <div className="box card column is-3">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={trail.imgSmallMed ? (trail.imgSmallMed) : ("http://appalachiantrail.org/images/default-source/default-album/trailfocus.jpg?sfvrsn=2")} alt={trail.name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <a className="title is-4" href={trail.url} target="_blank" rel="noopener noreferrer">{trail.name}</a>
          </div>
        </div>

        <div className="content">
          {trail.summary}
        </div>
      </div>
      <footer className="card-footer">
        {/* <input className="button is-primary " type="submit" value="Find me trails!" /> */}
        <a href="/like" className="card-footer-item has-text-black" onClick={handleLikeClick}><i className="fas fa-heart"></i>  Save</a>
        <a href="/comment" className="card-footer-item has-text-black" onClick={handleReviewClick}><i className="fas fa-comments"></i>  Review</a>
        {/* <div class="tabs is-centered">
          <ul>
            <li class="is-active">
              <div>
                <span class="icon is-small"><i class="fas fa-heart" aria-hidden="true"></i></span>
                <span><input className="card-footer-item has-text-black" type="submit" value="Like" /></span>
              </div>
            </li>
            <li>
              <div>
                <span class="icon is-small"><i class="fas fa-comments" aria-hidden="true"></i></span>
                <span><input className="card-footer-item has-text-black" type="submit" value="Review " /></span>
              </div>
            </li>
          </ul>
        </div> */}
      </footer>
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}
export default connect(mapStateToProps, { saveTrails, addTrailtoReview })(TrailCard)