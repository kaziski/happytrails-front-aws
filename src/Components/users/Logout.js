import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../../actions/loginForm.js"
import { logout } from "../../actions/currentUser.js"
import { Button } from "react-bulma-components/full";


const Logout = ({ logout }) => {
  return (
    <form onSubmit={logout}>
      <Button type="submit" >
        Logout
      </Button>
    </form>
  )
}

export default connect(null, { updateLoginForm, logout })(Logout)