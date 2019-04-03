/* eslint-disable */
import React from "react";
import { shallow } from "enzyme";

import Counter from "../../../src/components/Counter";

describe("Counter component", () => {
  const wrapper = shallow(<Counter />);

  const nextProps = {
    count: 0,
    word: "{ Hello World }",
  };

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("starts with a count of 0", () => {
    const wrapper = shallow(<Counter />);
    const countState = wrapper.state().count;
    expect(countState).toEqual(0);
  });
});
