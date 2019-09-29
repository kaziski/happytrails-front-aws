import React from 'react';
// import { NavLink } from 'r`eact-router-dom';
import { connect } from 'react-redux'
import { Title } from '../ui/Styles'
import Logout from './users/Logout'

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
          <Title className="title"><span className="fas fa-hiking"></span> Happy Trails</Title>
        </div>
      </nav>
      {currentUser ? <LogoutButton /> : ""}
    </>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)