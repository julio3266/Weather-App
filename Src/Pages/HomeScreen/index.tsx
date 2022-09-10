import React from "react";
import * as Styled from "./styles";

export interface IHomeScreenProps {
  title?: string;
}

export const HomeScreen: React.FC<IHomeScreenProps> = ({
  title = "Home Screen Page",
}) => {
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Container>
  );
};
