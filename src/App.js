import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { getCurrentUser } from './actions/currentUser'
import NavBar from './components/NavBar'
import { AppLayout } from './ui/Styles'
import Home from './components/Home'
import TrailsContainer from './containers/TrailsContainer'
import ReviewsContainer from './containers/ReviewsContainer'

export class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  render() {
    return (
      <Router>
        <AppLayout>
          <NavBar />

          <Route exact path="/" component={Home} />
          <Route exact path="/trails" component={TrailsContainer} />
          <Route exact path="/reviews" component={ReviewsContainer} />
          {/* {currentUser ? <Logout /> : <Login />} */}

        </AppLayout>
      </Router>
    )
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App)
