import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Title } from '../ui/Styles'
import Logout from './users/Logout'
import { NavLink } from 'react-router-dom'

export const NavBar = ({ currentUser }) => {
  return (
    < >
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Title className="title"><Link to="/"><span className="fas fa-hiking"></span></Link>  Happy Trails</Title>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            {currentUser ? <span> <Logout /><NavLink to="/my_trails" >My Trails</NavLink></span> : ""}
            {/* add home link, put in const and make it if statement? */}
          </div>
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
