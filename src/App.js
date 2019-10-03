import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/users/Login'
// import Logout from './components/users/Logout'
import Signup from './components/users/Signup'
import MyTrails from './components/trails/MyTrails'

import { getCurrentUser } from './actions/currentUser'

export class App extends Component {

  //I need to this for getDerivedStateFromProps to work properly
  state = {}

  static getDerivedStateFromProps({ getCurrentUser }) {
    getCurrentUser()
    return null
  }

  render() {

    return (
      <div className="App">
        <section className="hero is-fullheight has-background is-transparent">
          <NavBar />
          <div className="hero-body">
            <div className="container">
              <Switch>
                <Route exact path='/' component={Home} />
                {/* These three are showing up as buttons.  */}
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
                {/* <Route exact path='/logout' component={Logout} /> */}
                <Route exact path='/my_trails' component={MyTrails} />

                {/* <Route exact path='/geoform' component={GeoForm} /> */}

                {/* Once I store the state of trips, I need to find my trip id to use it for the path */}
                {/* <Route exact path="/reviews" component={ReviewsContainer} /> */}
              </Switch>
            </div>
          </div>
        </section>
      </div >
    )
  }
}

export default connect(null, { getCurrentUser })(App)

