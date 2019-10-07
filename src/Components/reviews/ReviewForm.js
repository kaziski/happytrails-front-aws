import React, { Component } from 'react'
import { connect } from 'react-redux'
import MyReviews from './MyReviews'
import { saveReview } from '../../actions/reviews'

class ReviewForm extends Component {

  state = {
    review: '',
    isSubmitted: false
  }

  handleOnChange = event => {
    this.setState({
      review: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.setState({ isSubmitted: true })
    //this.state.review is a string
    this.props.saveReview(this.state.review, this.props.trail, this.props.currentUser)
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
                  value={this.state.review}
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
    return <MyReviews />
  }
}

//reviews is the name of the store.
//What's in the store can be named whatever we want such as trailToReview
// const mapStateToProps = state => ({ trailToReview: state.reviews })

export default connect(null, { saveReview })(ReviewForm);