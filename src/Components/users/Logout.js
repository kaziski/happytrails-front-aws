import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../../actions/loginForm"
import { logout } from "../../actions/currentUser"
import { Button } from "../../ui/Styles"

const Logout = ({ logout }) => {
  return (
    <form onSubmit={logout}>
      <Button type="submit">  Log out </Button>
    </form >
  )
}

export default connect(null, { updateLoginForm, logout })(Logout)