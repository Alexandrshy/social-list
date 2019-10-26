import React from "react";
import renderer from "react-test-renderer";

import { Switch } from "./Switch";

beforeEach(() => {
  window.matchMedia = jest.fn();
});

describe("Switch component", () => {
  it("should render", () => {
    const tree = renderer.create(<Switch />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
