import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../../actions/loginForm.js"
import { login } from "../../actions/currentUser.js"

const Login = ({ loginFormData, updateLoginForm, login }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginFormData)
  }

  return (
    <form className='login' onSubmit={handleSubmit}>
      <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-rounded is-hovered" placeholder="username" value={loginFormData.username} name="username" type="text" onChange={handleInputChange} />
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
          </span>
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-rounded is-hovered" placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange} />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
          <span class="icon is-small is-right">
          </span>
        </div>
      </div>
      <button class="button is-primary is-rounded" type="submit">  Log In </button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)