import React, { useRef } from "react";
import * as Styled from "./styles";

export interface ILoader {
  loading: boolean;
}

export const LoaderAnimated: React.FC<ILoader> = ({ loading }) => {
  const animation = useRef(null);
  return (
    <>
      {loading && (
        <Styled.Container>
          <Styled.AnimatedView
            autoPlay
            ref={animation}
            source={require("../../Assets/Animation/loaderAnimation.json")}
          />
        </Styled.Container>
      )}
    </>
  );
};
