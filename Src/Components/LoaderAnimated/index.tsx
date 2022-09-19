import React, { useRef } from "react";
import { assignTestId } from "../../utils/qualityAssurance";
import * as Styled from "./styles";

export interface ILoader {
  testID?: string;
  loading: boolean;
}

export const LoaderAnimated: React.FC<ILoader> = ({
  testID = "LoaderAnimated",
  loading,
}) => {
  const animation = useRef(null);
  return (
    <>
      {loading && (
        <Styled.Container {...assignTestId("View", testID)}>
          <Styled.AnimatedView
            {...assignTestId("Lottie", `${testID}_animated`)}
            autoPlay
            ref={animation}
            source={require("../../Assets/Animation/loaderAnimation.json")}
          />
        </Styled.Container>
      )}
    </>
  );
};
