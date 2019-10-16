import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../../actions/currentUser"

export const Logout = (props) => {

  props.logout()
  props.history.push('/')
  return (
    null
  )

}


export default connect(null, { logout })(Logout)