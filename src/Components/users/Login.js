import React from 'react'
import { connect } from 'react-redux'
import { updateLoginFrom } from '../../actions/loginForm'

const Login = ({ loginForm, updateLoginFrom }) => {
  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginForm,
      [name]: value
    }
    updateLoginFrom(updatedFormInfo)
  }

  return (
    <form onSubmit={(event) => this.handleOnSubmit(event)} >
      <input type="text" placeholder="username" value={loginForm.username} name="username" onChange={handleInputChange} />
      <input type="text" placeholder="password" value={loginForm.password} name="password" onChange={handleInputChange} />
      <input type="submit" value="Log In" />
    </form>
  )
}

const mapStateToProps = state => {
  return {
    loginForm: state.loginForm
  }
}
export default connect(mapStateToProps, { updateLoginFrom })(Login)