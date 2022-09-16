import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default {
  colors: {
    white: "#fff",
    blackTransparence: "rgba(52, 52, 52, 0.5)",
    darkPalletPrimary: "#16213E",
  },
  fonts: {
    regular: "Poppins_400Regular",
  },
  dimensions: {
    widthScreen: screenWidth,
    heightScreen: screenHeight,
  },
};
