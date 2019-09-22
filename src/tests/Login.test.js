import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Login from "../components/users/Login"

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

