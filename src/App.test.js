// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
import React from 'react'
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Login from './components/users/Login'
import Adapter from 'enzyme-adapter-react-16'
// import App from '../src/App'
// // import Logout from '../src/components/users/Logout'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import { connect } from 'react-redux'
// import { updateLoginForm } from "./actions/loginForm"
// import { login } from "./actions/currentUser.js"

configure({ adapter: new Adapter() })

describe('Login', () => {
  it('has an text input field', () => {
    const wrapper = shallow(<Login />)
    // expect(wrapper.find('input').length).toEqual(3)
    expect(wrapper.find('input').first().type()).to.equal('input');
  })
})

