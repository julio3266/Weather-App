import React from "react";
import { render } from "@testing-library/react-native";
import { mockTestID } from "../../utils/qualityAssurance";
import { ThemeProviderWrapper as wrapper } from "../../utils/ThemeProviderWrapper";
import { LoaderAnimated, ILoader } from "../LoaderAnimated";

describe("Components/Background", () => {
  let props: ILoader = {
    loading: true,
  };
  const { findByTestId, toJSON } = render(<LoaderAnimated {...props} />, {
    wrapper,
  });

  const sut_container = mockTestID("View", props.testID!).testID;
  const el_animated = mockTestID("Lottie", `${props.testID!}_animated`).testID;

  it(`should render #${sut_container}`, () => {
    const sut = findByTestId(sut_container);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_animated}`, () => {
    const sut = findByTestId(el_animated);
    expect(sut).toBeTruthy();
  });

  it(`should render a snapshot`, () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
