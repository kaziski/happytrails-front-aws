import React from 'react'
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Login from './components/users/Login'
import Adapter from 'enzyme-adapter-react-16'
import { connect } from 'react-redux'
import { updateLoginForm } from "./actions/loginForm.js"
import { login } from "./actions/currentUser.js"
// import { App } from '../src/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ConnectedApp, { App } from '../src/App'
// import Logout from '../src/components/users/Logout'

configure({ adapter: new Adapter() })

describe('Login', () => {
  it('has an text input field', () => {
    const wrapper = shallow(<Login />)
    // expect(wrapper.find('input').length).toEqual(3)
    expect(wrapper.find('input').first().type()).to.equal('input');
  })
})

