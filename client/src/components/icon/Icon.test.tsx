import React from "react";
import renderer from "react-test-renderer";

import { Icon } from "./Icon";

describe("Icon component", () => {
  it("should render an image", () => {
    const tree = renderer.create(<Icon name="logo" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render an use", () => {
    const tree = renderer.create(<Icon name="logo" type="use" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should return null", () => {
    const tree = renderer.create(<Icon name="cats" type="use" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
