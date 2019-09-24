import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { Title, H2 } from '../ui/Styles'

// import { getCurrentUser } from '../actions/currentUser'

import Login from './users/Login'
import Logout from './users/Logout'


const NavBar = ({ currentUser }) => {
  return (
    <>
      {currentUser ? <NavLoggedIn /> : <NavLoggedOut />}

      {currentUser ? <H2><strong>Welcome, {currentUser.username}!</strong></H2> : ""}
      {currentUser ? <Logout /> : <Login />}
    </>
  )
}

export const NavLoggedIn = () => {
  return (
    < >
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Title className="title"><span className="fas fa-hiking"></span> Happy Trails</Title>

          <div className="navbar-start">
            <NavLink className="navbar-item" to="/">Home</NavLink>
          </div>

          <div className="navbar-end">
            <NavLink className="navbar-item" to="/trails">Trails</NavLink>
            <NavLink className="navbar-item" to="/reviews">Reviews</NavLink>
          </div>
        </div>
      </nav>

    </>
  )
}
export const NavLoggedOut = () => {
  return (
    < >
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Title className="title">Happy Trails</Title>
        </div>
      </nav>
    </>
  )
}

//   <div className="LogInOut">
//     {currentUser ? <H2><strong>Welcome, {currentUser.username}!</strong></H2> : ""}
//     {currentUser ? <Logout /> : <Login />}
//   </div> 

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)