import React, { Component } from 'react'
import { connect } from 'react-redux'
// import MyReviews from './MyReviews'
import { saveReview } from '../../actions/reviews'

import Home from '../Home'

class ReviewForm extends Component {

  state = {
    comment: '',
    isSubmitted: false
  }

  handleOnChange = event => {
    this.setState({
      comment: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.setState({ isSubmitted: true })
    //last two props were passed in Redirect and this is how to access it with location
    this.props.saveReview(this.state.comment, this.props.location.state.trail, this.props.location.state.currentUser)
  }

  render() {
    if (!this.state.isSubmitted) {
      return (
        < >
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            < div className="field has-addons" >
              <div className="control is-expanded">
                <input type="text"
                  className="input"
                  placeholder="write review here"
                  value={this.state.comment}
                  onChange={event => this.handleOnChange(event)}
                />
              </div>
              <div className="control">
                <input className="button is-primary " type="submit" value="Submit Review" />
              </div>
            </div >
          </form >
        </>
      )
    }
    alert('yo!')
    return <Home />
    // return <MyReviews />
  }
}

//reviews is the name of the store.
//What's in the store can be named whatever we want such as trailToReview
// const mapStateToProps = state => ({ trailToReview: state.reviews })

export default connect(null, { saveReview })(ReviewForm);