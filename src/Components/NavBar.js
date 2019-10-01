import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Title } from '../ui/Styles'
import Logout from './users/Logout'
// import { Route, Switch } from 'react-router-dom'
// import Login from '../components/users/Login'
// import Signup from '../components/users/Signup'
// import Home from '../components/Home'

const LogoutButton = () => {
  return (
    < >
      <div className="navbar-end">
        <div className="navbar-item">
          <Logout />
        </div>
      </div>
    </>
  )
}

export const NavBar = ({ currentUser }) => {
  return (
    < >
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Title className="title"><Link to="/"><span className="fas fa-hiking"></span></Link>  Happy Trails</Title>
        </div>
      </nav>
      {currentUser ? <LogoutButton /> : ""}
      {/* <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />

        {/* Once I store the state of trips, I need to find my trip id to use it for the path */}
      {/* <Route exact path="/reviews" component={ReviewsContainer} /> */}
      {/* </Switch> * /} */}
    </>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)