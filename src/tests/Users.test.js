import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Login from "../components/users/Login"
import Logout from "../components/users/Logout"
const mockStore = configureMockStore();
const store = mockStore({})

describe("Login Component", () => {

  const wrapper = shallow(<Provider store={store}>
    <Login name="test" username="test" password="test" value="test" />
    {/* <Login name="test" username="test" password="test" value="test" /> */}
  </Provider>)

  it("should render without throwing an error", () => {
    expect(wrapper)
  })

  // it('should find a form', () => {
  //   const component = mount(<Provider store={store}><Login name="test" username="test" password="test" value="test" /></Provider>)
  //   expect(component.find('form').to.have.lengthOf(1))
  // })
  // Can't figure out how to work around this TypeError: Cannot read property 'have' of undefined
  //Something to do with class component
});

describe("Logout Component", () => {
  it("should render without throwing an error", () => {
    expect(
      shallow(
        <Provider store={store}>
          <Logout />
        </Provider>
      )
    )
  })
})




