import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import UnauthenticatedHome from './components/UnauthenticatedHome'
import Home from './components/Home'
import Login from './components/users/Login'
import Logout from './components/users/Logout'
import Signup from './components/users/Signup'
import MyTrails from './components/trails/MyTrails'
import ReviewForm from './components/reviews/ReviewForm'
import MyReviews from './components/reviews/MyReviews'
import TrailReviews from './components/reviews/TrailReviews'
import { getCurrentUser } from './actions/currentUser'
import { getMyReviews } from '../src/actions/reviews'
import { getSavedTrails } from '../src/actions/trails'

class App extends Component {

  //TODO when a user first sign up, it doesn't seem to know the current user


  componentDidMount() {
    this.props.getCurrentUser()
    this.props.getMyReviews()
    this.props.getSavedTrails()
  }

  render() {
    const { loggedOut } = this.props

    return (
      <div className="App">
        <section className="hero is-fullheight has-background is-transparent">
          {/* {loggedIn ? <NavBar location={this.props.location} /> : null} */}
          {loggedOut ?
            <UnauthenticatedHome />
            : <span>
              <NavBar location={this.props.location} />
              {/* <Home /> */}
            </span>
          }

          <div className="hero-body">
            <div className="container">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/logout' component={Logout} />
                <Route path='/my-trails' render={(props) => <MyTrails {...props} myTrails={this.props.myTrails} />} />
                <Route exact path='/reviews/new' component={ReviewForm} />
                <Route path='/my-reviews' render={(props) => <MyReviews {...props} reviews={this.props.reviews} />} />
                <Route exact path='/trails/:trail_id/reviews' component={TrailReviews} />
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
    // loggedIn: !!state.currentUser,
    loggedOut: !state.loginForm,

    currentUser: state.currentUser,
    reviews: state.reviews,
    trails: state.trails
  }
}

export default connect(mapStateToProps, { getCurrentUser, getMyReviews, getSavedTrails })(App)

