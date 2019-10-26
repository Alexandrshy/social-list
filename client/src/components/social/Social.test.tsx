import React from "react";
import renderer from "react-test-renderer";

import { Social } from "./Social";

jest.mock("../icon/Icon", () => ({
  Icon: "Icon"
}));

describe("Social component", () => {
  it("should render", () => {
    const tree = renderer.create(<Social />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
