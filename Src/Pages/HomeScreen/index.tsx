import React from "react";
import * as Styled from "./styles";
import { Background } from "../../Components/Background";

export interface IHomeScreenProps {
  title?: string;
}

export const HomeScreen: React.FC<IHomeScreenProps> = ({}) => {
  return (
    <Styled.Container>
      <Background backgroundOfType={"night"} resizeTypeMode={"cover"} />
    </Styled.Container>
  );
};
