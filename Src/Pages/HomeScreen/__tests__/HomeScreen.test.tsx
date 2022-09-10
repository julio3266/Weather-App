import React from "react";
import renderer from "react-test-renderer";

import { HomeScreen } from "../../HomeScreen";

describe("should render element", () => {
  it("has 1 child", () => {
    renderer.create(<HomeScreen />).toJSON();
  });
});
