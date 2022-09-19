import React from "react";
import { render } from "@testing-library/react-native";
import { mockTestID } from "../../utils/qualityAssurance";
import { ThemeProviderWrapper as wrapper } from "../../utils/ThemeProviderWrapper";
import { HorizontalCardList, IHorizontalProps } from "../HorizontalCardList";

describe("Components/Background", () => {
  let props: IHorizontalProps = {
    testID: "HorizontalCardList",
    dataHorizontalList: [
      { hourly: "18:00", icon: "20d", situationPerHour: "nublado" },
    ],
  };
  const { findByTestId, toJSON } = render(<HorizontalCardList {...props} />, {
    wrapper,
  });

  const sut_container = mockTestID("View", props.testID!).testID;
  const el_column = mockTestID("View", `${props.testID!}_column`).testID;
  const el_title = mockTestID("Text", `${props.testID!}_title`).testID;
  const el_iconView = mockTestID("View", `${props.testID!}_iconView`).testID;
  const el_icon = mockTestID("Image", `${props.testID!}_icon`).testID;

  it(`should render #${sut_container}`, () => {
    const sut = findByTestId(sut_container);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_column}`, () => {
    const sut = findByTestId(el_column);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_title}`, () => {
    const sut = findByTestId(el_title);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_iconView}`, () => {
    const sut = findByTestId(el_iconView);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_icon}`, () => {
    const sut = findByTestId(el_icon);
    expect(sut).toBeTruthy();
  });

  it(`should render a snapshot`, () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
