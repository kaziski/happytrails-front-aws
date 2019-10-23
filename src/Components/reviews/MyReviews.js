import React, { Component } from 'react'
import { connect } from 'react-redux'
import MyReview from './MyReview'
import { getMyReviews } from '../../actions/reviews'
import { Sub } from '../../ui/Styles'

class MyReviews extends Component {

  componentDidMount() {
    this.props.getMyReviews()
  }

  state = {
    clicked: false
  }

  render() {

    const handleClick = event => {
      event.preventDefault()
      this.setState({
        clicked: !this.state.clicked
      })
    }
    const reviewArr = this.props.reviews.currentUserReviews.filter(review => { return review.attributes.api_trail_name === "Steep Ravine - Matt Davis Loop" })
    const rAr = reviewArr.map(review => {
      return (
        <MyReview
          key={review.id}
          review={review.attributes}
          review_id={review.id}
        />
      )
    })

    const reg = this.props.reviews.currentUserReviews.map(review => {
      return (
        <MyReview
          key={review.id}
          review={review.attributes}
          review_id={review.id}
        />
      )
    })
    if (!this.state.clicked) {
      return (
        < >
          <button onClick={handleClick}>On</button>
          {this.props.reviews.currentUserReviews.length === 0 ? <Sub className="has-text-black">You haven't created any reviews</Sub> : null}
          {rAr.reverse()}
        </>
      )
    } else {
      return (
        < >
          <button onClick={handleClick}>On</button>
          {this.props.reviews.currentUserReviews.length === 0 ? <Sub className="has-text-black">You haven't created any reviews</Sub> : null}
          {reg.reverse()}
        </>
      )
    }
  }

}

const mapStateToProps = state => ({ reviews: state.reviews })

export default connect(mapStateToProps, { getMyReviews })(MyReviews)