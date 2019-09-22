import React from 'react'
import { connect } from 'react-redux'
import Login from '../users/Login'
import Logout from '../users/Logout'

const NavBar = ({ currentUser }) => {
  return (
    <div className="NavBar">
      {currentUser ? <strong>Welcome, {currentUser.username}</strong> : ""}
      {currentUser ? <Logout /> : <Login />}
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)