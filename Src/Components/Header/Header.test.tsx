import React from "react";
import { render } from "@testing-library/react-native";
import { mockTestID } from "../../utils/qualityAssurance";
import { ThemeProviderWrapper as wrapper } from "../../utils/ThemeProviderWrapper";
import { Header, IHeaderProps } from "../Header";

describe("Components/Background", () => {
  let props: IHeaderProps = {
    testID: "Header",
    city: "Fortaleza",
    state: "Ceará",
    situation: "nublado",
    max: 30,
    min: 25,
    temperature: 32,
  };
  const { findByTestId, toJSON } = render(<Header {...props} />, {
    wrapper,
  });

  const el_container = mockTestID("View", props.testID!).testID;
  const el_title = mockTestID("Text", `${props.testID!}_title`).testID;
  const el_titleSituation = mockTestID(
    "Text",
    `${props.testID!}_titleSituation`
  ).testID;
  const el_titleTemperature = mockTestID(
    "Text",
    `${props.testID!}_titleTemperature`
  ).testID;
  const el_titleMinMax = mockTestID(
    "Text",
    `${props.testID!}_titleMinMax`
  ).testID;

  it(`should render #${el_container}`, () => {
    const sut = findByTestId(el_container);
    expect(sut).toBeTruthy();
  });

  it(`should render ${el_title}`, () => {
    const title = findByTestId(el_title);
    expect(title).toBeTruthy();
  });

  it(`should render ${el_titleSituation}`, () => {
    const title = findByTestId(el_titleSituation);
    expect(title).toBeTruthy();
  });

  it(`should render ${el_titleTemperature}`, () => {
    const title = findByTestId(el_titleTemperature);
    expect(title).toBeTruthy();
  });

  it(`should render ${el_titleMinMax}`, () => {
    const title = findByTestId(el_titleMinMax);
    expect(title).toBeTruthy();
  });

  it(`should render a snapshot`, () => {
    expect(toJSON()).toMatchSnapshot();
  });
});
