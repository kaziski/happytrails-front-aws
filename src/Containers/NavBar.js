import React from 'react'
import { connect } from 'react-redux'
import Login from '../components/users/Login'
import Logout from '../components/users/Logout'

const NavBar = ({ currentUser }) => {
  // return (
  //   <div className="LogInOut">
  //     {currentUser ? <H2><strong>Welcome, {currentUser.username}!</strong></H2> : ""}
  //     {currentUser ? <Logout /> : <Login />}
  //   </div>
  // )
}
const mapStateToProps = ({ currentUser }) => {
  // return {
  //   currentUser
  // }
}

export default connect(mapStateToProps)(NavBar)