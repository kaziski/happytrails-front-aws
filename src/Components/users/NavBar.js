import React from 'react'
import { connect } from 'react-redux'
import Login from '../users/Login'
import Logout from '../users/Logout'
import { H2 } from '../../ui/Styles'

const NavBar = ({ currentUser }) => {
  return (
    <div className="NavBar">
      {currentUser ? <H2><strong>Welcome, {currentUser.attributes.username}!</strong></H2> : ""}
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