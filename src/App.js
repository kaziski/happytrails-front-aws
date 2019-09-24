import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
// import { Route, Switch, withRouter } from 'react-router-dom'
import { getCurrentUser } from './actions/currentUser'
import NavBar from './components/NavBar'
import { AppLayout } from './ui/Styles'
import Home from './components/Home'
import Login from './components/users/Login.js'
import TrailsContainer from './containers/TrailsContainer'
import ReviewsContainer from './containers/ReviewsContainer'
import IndexTrail from './components/trails/IndexTrail'

export class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  render() {
    const { currentUser } = this.props
    return (
      <div className="App">
        <AppLayout>
          <NavBar />
          {currentUser ? <TrailsContainer /> : <Login />}
          <Switch>
            When I put line 29 back, it shows two log in form

            <Route path="/" component={Home} />
            {/* <Route exact path='/login' component={Login} /> */}
            <Route exact path="/trails" component={TrailsContainer} />
            <Route exact path="/reviews" component={ReviewsContainer} />
          </Switch>
        </AppLayout>
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
