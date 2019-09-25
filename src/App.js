import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Route, Switch } from 'react-router-dom'
// import { Route, Switch, withRouter } from 'react-router-dom'
import { getCurrentUser } from './actions/currentUser'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/users/Login.js'


// import TrailsContainer from './containers/TrailsContainer'
// import ReviewsContainer from './containers/ReviewsContainer'
// import IndexTrail from './components/trails/IndexTrail'

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
            <div className="container has-text-centered">
              <div className="title">
                {currentUser ? <Home /> : <Login />}
              </div>
            </div>
          </div>
          {/* <Switch>

            <Route exact path="/" component={Home} />
            When I put line 28, I get "TypeError: Cannot read property 'username' of null"
            <Route exact path='/login' component={Login} />
            <Route exact path="/trails" component={TrailsContainer} />
            <Route exact path="/reviews" component={ReviewsContainer} />
          </Switch> */}
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
