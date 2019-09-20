import React from 'react'
import { connect } from 'react-redux'
import { updateLoginFrom } from '../../actions/loginForm'
import { login } from '../../actions/currentUser'

const Login = ({ loginFormData, updateLoginFrom, login }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
    updateLoginFrom(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginFormData)
  }

  return (
    <form onSubmit={handleSubmit} >
      <input type="text" placeholder="username" value={loginFormData.username} name="username" onChange={handleInputChange} />
      <input type="text" placeholder="password" value={loginFormData.password} name="password" onChange={handleInputChange} />
      <input type="submit" value="Log In" />
    </form>
  )
}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}
export default connect(mapStateToProps, { updateLoginFrom, login })(Login)