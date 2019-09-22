import React from "react"
import { shallow } from "enzyme"
import { Provider } from "react-redux"
import configureMockStore from "redux-mock-store"
import App from "../App"
import Login from "../components/users/Login"

const mockStore = configureMockStore();
const store = mockStore({});

describe("App Component", () => {

  const wrapper = shallow(<Provider store={store}><App /></Provider>)

  it("should render without throwing an error", () => {
    expect(wrapper)
  })

})

