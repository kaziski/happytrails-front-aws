import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../../actions/loginForm"
import { logout } from "../../actions/currentUser"
import { Button } from "../../ui/Styles"

class Logout extends Component {

  handleSubmit = () => {
    this.props.logout()
    this.props.history.push('/')
  }
  render() {
    return (
      <form onSubmit={logout}>
        <Button type="submit">  Log out </Button>
      </form >
    )
  }

}

export default connect(null, { updateLoginForm, logout })(Logout)