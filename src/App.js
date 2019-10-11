import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/users/Login'
import Logout from './components/users/Logout'
import Signup from './components/users/Signup'
import MyTrails from './components/trails/MyTrails'
import ReviewForm from './components/reviews/ReviewForm'
import MyReviews from './components/reviews/MyReviews'

import { getCurrentUser } from './actions/currentUser'
import { getMyReviews } from '../src/actions/reviews'
import { getSavedTrails } from '../src/actions/trails'
//! I need to pass in getSavedTrails
export class App extends Component {

  //I need to this for getDerivedStateFromProps to work properly
  state = {}

  static getDerivedStateFromProps({ getCurrentUser }) {
    getCurrentUser()
    return null
  }

  componentDidMount() {
    this.props.getMyReviews()
    this.props.getSavedTrails()
  }

  render() {
    // debugger
    return (
      <div className="App">
        <section className="hero is-fullheight has-background is-transparent">
          <NavBar />
          <div className="hero-body">
            <div className="container">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/logout' component={Logout} />
                <Route path='/my-trails' render={(props) => <MyTrails {...props} myTrails={this.props.myTrails} />} />

                <Route exact path='/reviews/new' component={ReviewForm} />
                <Route path='my-reviews' render={(props) => <MyReviews {...props} reviews={this.props.reviews} />} />

              </Switch>
            </div>
          </div>
        </section>
      </div >
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews,
    trails: state.trails
  }
}

export default connect(mapStateToProps, { getCurrentUser, getMyReviews, getSavedTrails })(App)

