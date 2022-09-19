import React from "react";
import { render } from "@testing-library/react-native";
import { mockTestID } from "../../utils/qualityAssurance";
import { ThemeProviderWrapper as wrapper } from "../../utils/ThemeProviderWrapper";
import { VerticalCardList, IVerticalCardList } from "../VerticalCardList";

describe("Components/Background", () => {
  let props: IVerticalCardList = {
    IVerticalListData: [
      {
        dailyName: "segunda-feira",
        icon: "20d",
        situationPerDaily: "nublado",
        tempMax: 35,
        tempMin: 30,
      },
      {
        dailyName: "segunda-feira",
        icon: "20d",
        situationPerDaily: "nublado",
        tempMax: 35,
        tempMin: 30,
      },
    ],
  };
  const { findByTestId, toJSON } = render(<VerticalCardList {...props} />, {
    wrapper,
  });

  const sut_container = mockTestID("View", props.testID!).testID;
  const el_list = mockTestID("View", `${props.testID!}_list`).testID;
  const el_title = mockTestID("Text", `${props.testID!}_title`).testID;
  const el_subTitle = mockTestID("Text", `${props.testID!}_subTitle`).testID;
  const el_subTitleSecondary = mockTestID(
    "Text",
    `${props.testID!}_subTitleSecondary`
  ).testID;

  const el_icon = mockTestID("Image", `${props.testID!}_icon`).testID;

  it(`should render #${sut_container}`, () => {
    const sut = findByTestId(sut_container);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_list}`, () => {
    const sut = findByTestId(el_list);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_title}`, () => {
    const sut = findByTestId(el_title);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_subTitle}`, () => {
    const sut = findByTestId(el_subTitle);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_subTitle}`, () => {
    const sut = findByTestId(el_subTitle);
    expect(sut).toBeTruthy();
  });

  it(`should render #${el_subTitleSecondary}`, () => {
    const sut = findByTestId(el_subTitleSecondary);
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
