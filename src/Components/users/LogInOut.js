import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Logout from './Logout'
import { H2 } from '../../ui/Styles'

const LogInOut = ({ currentUser }) => {
  return (
    <div className="LogInOut">
      {/* {console.log("currentUser", currentUser.username)} */}
      {currentUser ? <H2><strong>Welcome, {currentUser.username}!</strong></H2> : ""}
      {currentUser ? <Logout /> : <Login />}
    </div>
  )
}
// user.data.attributes.username
const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(LogInOut)