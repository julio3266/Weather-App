import React from "react";
import { assignTestId } from "../../utils/qualityAssurance";
import * as Styled from "./styles";

export type resizeModeType =
  | "cover"
  | "contain"
  | "stretch"
  | "repeat"
  | "center";

export type backgroundType = "night" | "sunny" | "cloudy" | "rainy";

export interface IBackgroundProps {
  testID?: string;
  resizeTypeMode: resizeModeType;
  backgroundOfType: backgroundType;
  children?: any;
}

export const Background: React.FC<IBackgroundProps> = ({
  testID = "BackgroundID",
  resizeTypeMode,
  backgroundOfType,
  children,
}) => {
  return (
    <Styled.Container {...assignTestId("View", testID)}>
      <Styled.BackgroundImage
        {...assignTestId("ImageBackground", `${testID}_bgImage`)}
        source={
          backgroundOfType === "night" &&
          require("../../Assets/Images/cloudy-night.jpeg")
        }
        resizeMode={resizeTypeMode}
      >
        {children}
      </Styled.BackgroundImage>
    </Styled.Container>
  );
};
