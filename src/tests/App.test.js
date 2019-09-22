// import React from 'react'
// import { mount } from 'enzyme'
// import App from '../App'
// describe('First React component test with Enzyme', () => {
//   it('renders without crashing', () => {
//     mount(<App />);
//   });
// });

import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import App from "../App";

const mockStore = configureMockStore();
const store = mockStore({});

describe("App Component", () => {
  it("should render without throwing an error", () => {
    expect(
      shallow(
        <Provider store={store}>
          <App />
        </Provider>
      )
    )
  })
})

// it('contains <ChildComponent/> Component', () => {
//   const wrapper = mount(
//     <CustomProvider>
//       <SampleComponent {...defaultProps} />
//     </CustomProvider>
//   );
//   expect(wrapper.find(ChildComponent)).to.have.length(1);
// });