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

export const Header: React.FC<IHeaderProps> = () => {
  return (
    <Styled.Container>
      <Styled.Row>
        <Styled.SubTitle>Fortaleza, Ceara</Styled.SubTitle>
      </Styled.Row>
      <Styled.Row>
        <Styled.SecondarySubTitle>Tempo Nublado</Styled.SecondarySubTitle>
      </Styled.Row>
      <Styled.Row>
        <Styled.Title>30°</Styled.Title>
      </Styled.Row>
      <Styled.Row>
        <Styled.SecondarySubTitle>Min: 30° Max: 32°</Styled.SecondarySubTitle>
      </Styled.Row>
    </Styled.Container>
  );
};
