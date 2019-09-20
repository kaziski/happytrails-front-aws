import React from 'react'
import { connect } from 'react-redux'
// import { updateLoginFrom } from 
// src / actions / loginForm.js
const Login = ({ username, password }) => {
  return (
    <form onSubmit={(event) => this.handleOnSubmit(event)} >
      <input type="text" placeholder="username" value={username} name="username" />
      <input type="text" placeholder="password" value={password} name="password" />
      <input type="submit" value="Log In" />
    </form>
  )
}

const mapStateToProps = state => {
  return {
    username: state.loginForm.username,
    password: state.loginForm.password
  }
}
export default connect(mapStateToProps, { updateLoginFrom })(Login)