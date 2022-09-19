import React from "react";
import { assignTestId } from "../../utils/qualityAssurance";
import * as Styled from "./styles";

export interface IHeaderProps {
  testID?: string;
  city: string;
  state: string;
  situation: string;
  temperature: number;
  min: number;
  max: number;
}

export const Header: React.FC<IHeaderProps> = ({
  testID = "Header",
  city,
  state,
  min,
  max,
  situation,
  temperature,
}) => {
  return (
    <Styled.Container {...assignTestId("View", testID)}>
      <Styled.Row>
        <Styled.SubTitle {...assignTestId("Text", `${testID}_title`)}>
          {city}, {state}
        </Styled.SubTitle>
      </Styled.Row>
      <Styled.Row>
        <Styled.SecondarySubTitle
          {...assignTestId("Text", `${testID}_titleSituation`)}
        >
          {situation}
        </Styled.SecondarySubTitle>
      </Styled.Row>
      <Styled.Row>
        <Styled.Title {...assignTestId("Text", `${testID}_titleTemperature`)}>
          {temperature}°
        </Styled.Title>
      </Styled.Row>
      <Styled.Row>
        <Styled.SecondarySubTitle
          {...assignTestId("Text", `${testID}_titleMinMax`)}
        >
          Min: {min}° Max: {max}°
        </Styled.SecondarySubTitle>
      </Styled.Row>
    </Styled.Container>
  );
};
