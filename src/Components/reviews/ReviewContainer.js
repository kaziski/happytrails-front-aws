import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { getMyReviews } from '../../actions/reviews'
import MyTrailReview from './MyTrailReview'
import ReviewForm from './ReviewForm'


class ReviewContainer extends Component {

  componentDidMount() {
    this.props.getMyReviews()
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path='/reviews/new' component={ReviewForm} />
          <Route path='/reviews' render={(routerProps) => <MyTrailReview {...routerProps} reviews={this.props.reviews} />} />
        </Switch>
      </div >
    );
  }
}

const mapStateToProps = state => ({ reviews: state.reviews })

export default connect(mapStateToProps, { getMyReviews })(ReviewContainer)
