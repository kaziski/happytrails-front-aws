import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
// import { Route, Switch, withRouter } from 'react-router-dom'
import { getCurrentUser } from './actions/currentUser'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/users/Login.js'
import GeoForm from './components/trails/GeoForm'

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
          {/* 
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="title"> */}
          {currentUser ? <Home /> : <Login />}
          {/* </div>
            </div>
          </div> */}


          <Switch>
            {/* <Route exact path='/signup' render={({history})=><Signup history={history}/>}/> */}

            <Route exact path='/login' component={Login} />
            <Route exact path="/search" component={GeoForm} />
            {/* <Route exact path="/logout" component={Logout} /> */}
            {/* <Route exact path="/reviews" component={ReviewsContainer} /> */} */}
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
