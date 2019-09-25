import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { Title } from '../ui/Styles'
import Logout from './users/Logout'



const NavBar = ({ currentUser }) => {
  return (
    <>
      {currentUser ? <NavLoggedIn /> : <NavLoggedOut />}
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
            <NavLink className="navbar-item has-text-weight-bold has-text-white" to="/">Home</NavLink>
            <NavLink className="navbar-item has-text-weight-bold has-text-white" to="/trails">Trails</NavLink>
            <NavLink className="navbar-item has-text-weight-bold has-text-white" to="/reviews">Reviews</NavLink>
          </div>

          {/* <div className="navbar-end">
            <NavLink className="navbar-item has-text-weight-bold has-text-white" to="/trails">Trails</NavLink>
            <NavLink className="navbar-item has-text-weight-bold has-text-white" to="/reviews">Reviews</NavLink>

          </div> */}
        </div>


        <div className="navbar-end">
          <div className="navbar-item">
            <Logout />
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
          <Title className="title"><span className="fas fa-hiking"></span> Happy Trails</Title>
        </div>
      </nav>
    </>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)