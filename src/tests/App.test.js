import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { expect } from 'chai'
import configureMockStore from 'redux-mock-store'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// import App from './App'
import ConnectedApp, { App } from '../App'
import Login from '../components/users/Login'
// import { startLoader, stopLoader } from '../actionCreators'
// import { setCurrentUser } from '../src/actions/currentUser'
Enzyme.configure({ adapter: new Adapter() })
const mockStore = configureMockStore()
const mockState = {}

describe("<App />", function () {
  describe("<App />'s Dispatching Props:", function () {

    let store = mockStore(mockState)
    let wrapper

    beforeEach(function () {
      wrapper = mount(
        <Provider store={store}>
          <ConnectedApp />
        </ Provider>
      )
    })

    afterEach(function () {
      store.clearActions()
    })
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    // describe('<Login />', () => {
    //   it('renders without crashing', () => {
    //     const wrapper = shallow(<App />)
    //     expect(wrapper.length).toEqual(1);
    //   });
    // });

    // describe('<Login />', () => {
    //   it('has an text input field', () => {
    //     const wrapper = shallow(<Login />).dive()
    //     // expect(wrapper.find('input').length).toEqual(3)
    //     expect(wrapper.find('input').first().type()).to.equal('input');
    //   })
    // })
  })
})


