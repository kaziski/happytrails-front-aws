import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import GeoForm from "./components/trails/GeoForm"
import Login from './components/users/Login'
import Logout from './components/users/Logout'
import Signup from './components/users/Signup'

export class App extends Component {

  render() {

    return (
      <div className="App">
        <section className="hero is-fullheight has-background is-transparent">
          <NavBar />
          <div className="hero-body">
            <div className="container">
              <Home />
              <Switch>
                <Route exact path='/' component={Home} />
                {/* These three are showing up as buttons.  */}
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/logout' component={Logout} />

                <Route exact path='/geoform' component={GeoForm} />

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

export default App


