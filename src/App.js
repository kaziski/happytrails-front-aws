import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
// import { Route, Switch, withRouter } from 'react-router-dom'
import { getCurrentUser } from './actions/currentUser'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/users/Login'
import Logout from './components/users/Logout'
import TrailCard from './components/trails/TrailCard'
import Signup from './components/users/Signup'
import MyReviews from './components/reviews/MyReviews'


export class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { currentUser } = this.props
    return (
      <div className="App">
        <section className="hero is-fullheight has-background is-transparent">
          <NavBar />
          <div className="hero-body">
            <div className="container">
              <Home />
              <Switch>
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/logout' component={Logout} />
                <Route exact path='/myreviews' component={MyReviews} />
                <Route exact path="/trails/:id" component={TrailCard} />
                {/* Once I store the state of trips, I need to find my trip id to use it for the path */}
                {/* <Route exact path="/reviews" component={ReviewsContainer} /> */}
              </Switch>
            </div>
          </div>
          {currentUser ? <div className="hero-foot has-text-white	">Logged in as {currentUser.username}</div> : ""}
        </section>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App)

//! trying to render myReview to see props coming in

