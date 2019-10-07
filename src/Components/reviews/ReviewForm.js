import React, { Component } from 'react'
import { connect } from 'react-redux'

class ReviewForm extends Component {

  state = {
    review: ''
  }

  handleOnChange = event => {
    this.setState({
      review: event.target.value
    })
  }

  render() {
    return (
      <form >
        {/* <form onSubmit={(event) => this.handleOnSubmit(event)}></form> */}
        < div className="field has-addons" >
          <div className="control is-expanded">
            <input type="text"
              className="input"
              placeholder="write review here"
              // value={this.state.address}
              onChange={event => this.handleOnChange(event)}
            />
          </div>
          <div className="control">
            <input className="button is-primary " type="submit" value="Submit Review" />
          </div>
        </div >
      </form >
    )
  }
}

//reviews is the name of the store.
//What's in the store can be named whatever we want such as trailToReview
const mapStateToProps = state => ({ trailToReview: state.reviews })

export default connect(mapStateToProps)(ReviewForm);