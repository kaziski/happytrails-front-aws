import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewForm from '../reviews/ReviewForm'
import { saveTrails } from '../../actions/trails'
import { addTrailtoReview } from '../../actions/reviews'
import { Redirect } from 'react-router-dom'

// { trail, saveTrails, addTrailtoReview, currentUser, history }

class TrailCard extends Component {

  state = {
    reviewClicked: false,
    redirect: false
  }

  handleLikeClick = event => {
    event.preventDefault()
    this.props.saveTrails(this.props.trail, this.props.currentUser)
  }

  handleReviewClick = event => {
    event.preventDefault()
    this.props.addTrailtoReview(this.props.trail)
    this.setState({
      reviewClicked: true,
      redirect: true
    })
    // history.push('/review-form')
    // return <Redirect to='/review-form' />
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/review-form' />
    }
  }

  render() {
    const { trail } = this.props
    if (!this.state.reviewClicked) {
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
            <a href="/like" className="card-footer-item has-text-black" onClick={this.handleLikeClick}><i className="fas fa-heart"></i>  Save</a>
            <a href="/review-form" className="card-footer-item has-text-black"
              // onClick={this.handleReviewClick}>
              onClick={() => {
                this.handleReviewClick();
                this.renderRedirect();
              }}>
              <i className="fas fa-comments"></i>  Review</a>
          </footer >
        </div >
      )
    }
    return < ReviewForm />
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}
export default connect(mapStateToProps, { saveTrails, addTrailtoReview })(TrailCard)
