import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Login from "../components/users/Login"
import Logout from "../components/users/Logout"
const mockStore = configureMockStore();
const store = mockStore({})

describe("Login Component", () => {
  it("should render without throwing an error", () => {
    expect(
      shallow(
        <Provider store={store}>
          <Login />
        </Provider>
      )
    )
  })
})

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




