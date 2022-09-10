import React from "react";
import * as Styled from "./styles";
export type resizeModeType =
  | "cover"
  | "contain"
  | "stretch"
  | "repeat"
  | "center";

export type backgroundType = "night" | "sunny" | "cloudy" | "rainy";

export interface IBackgroundProps {
  resizeTypeMode: resizeModeType;
  backgroundOfType: backgroundType;
}

export const Background: React.FC<IBackgroundProps> = ({
  resizeTypeMode,
  backgroundOfType,
}) => {
  return (
    <Styled.Container>
      <Styled.BackgroundImage
        source={
          backgroundOfType === "night" &&
          require("../../Assets/cloudy-night.jpeg")
        }
        resizeMode={resizeTypeMode}
      />
    </Styled.Container>
  );
};
