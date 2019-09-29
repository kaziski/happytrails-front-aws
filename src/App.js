import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
// import { Route, Switch, withRouter } from 'react-router-dom'
import { getCurrentUser } from './actions/currentUser'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/users/Login.js'
import TrailCard from './components/trails/TrailCard'

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
          {currentUser ? <Home /> : <Login />}


          <Switch>
            {/* <Route exact path='/login' component={Login} /> */}
            <Route exact path="/trails/:id" component={TrailCard} />
            {/* Once I store the state of trips, I need to find my trip id to use it for the path */}
            {/* <Route exact path="/reviews" component={ReviewsContainer} /> */}
          </Switch>
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

