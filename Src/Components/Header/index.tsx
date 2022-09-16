import React from "react";
import * as Styled from "./styles";

export interface IHeaderProps {
  city: string;
  state: string;
  situation: string;
  temperature: number;
  min: number;
  max: number;
}

export const Header: React.FC<IHeaderProps> = ({
  city,
  state,
  min,
  max,
  situation,
  temperature,
}) => {
  return (
    <Styled.Container>
      <Styled.Row>
        <Styled.SubTitle>
          {city}, {state}
        </Styled.SubTitle>
      </Styled.Row>
      <Styled.Row>
        <Styled.SecondarySubTitle>{situation}</Styled.SecondarySubTitle>
      </Styled.Row>
      <Styled.Row>
        <Styled.Title>{temperature}°</Styled.Title>
      </Styled.Row>
      <Styled.Row>
        <Styled.SecondarySubTitle>
          Min: {min}° Max: {max}°
        </Styled.SecondarySubTitle>
      </Styled.Row>
    </Styled.Container>
  );
};
