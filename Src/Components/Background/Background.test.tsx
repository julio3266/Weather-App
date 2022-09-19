import React from "react";
import { render } from "@testing-library/react-native";
import { mockTestID } from "../../utils/qualityAssurance";
import { ThemeProviderWrapper as wrapper } from "../../utils/ThemeProviderWrapper";
import { Background, IBackgroundProps } from "../Background";

describe("Components/Background", () => {
  let props: IBackgroundProps = {
    testID: "BackgroundID",
    backgroundOfType: "night",
    resizeTypeMode: "cover",
  };
  const { findByTestId, toJSON } = render(<Background {...props} />, {
    wrapper,
  });

  const sut_container = mockTestID("View", props.testID!).testID;

  const el_imageBackground = mockTestID(
    "ImageBackground",
    `${props.testID!}_bgImage`
  ).testID;

  it(`should render #${sut_container}`, () => {
    const sut = findByTestId(sut_container);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_imageBackground}`, () => {
    const sut = findByTestId(el_imageBackground);
    expect(sut).toBeTruthy();
  });

  it(`should render a snapshot`, () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
