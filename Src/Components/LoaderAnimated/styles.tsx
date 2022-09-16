import styled from "styled-components/native";
import LottieView from "lottie-react-native";

export const Container = styled.View`
  flex: 1;
  height: ${({ theme }) => theme.dimensions.heightScreen}px;
  width: ${({ theme }) => theme.dimensions.widthScreen}px;
`;

export const AnimatedView = styled(LottieView)`
  background-color: ${({ theme }) => theme.colors.darkPalletPrimary};
  justify-content: center;
  align-content: center;
`;
