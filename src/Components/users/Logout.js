import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../../actions/loginForm.js"
import { logout } from "../../actions/currentUser.js"

const Logout = ({ logout }) => {
  return (
    <form onSubmit={logout}>
      <button class="button is-primary is-rounded" type="submit">  Log out </button>
    </form>
  )
}

export default connect(null, { updateLoginForm, logout })(Logout)