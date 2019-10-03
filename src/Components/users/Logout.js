import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../../actions/loginForm"
import { logout } from "../../actions/currentUser"
import { Button } from "../../ui/Styles"

class Logout extends Component {

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.logout()
    // this.props.history.push('/')
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <Button type="submit">  Log out </Button>
      </form >
    )
  }

}

export default connect(null, { updateLoginForm, logout })(Logout)