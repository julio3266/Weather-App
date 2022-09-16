import React, { useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "styled-components/native";
import { Provider } from "react-redux";
import store from "../Store";
import theme from "../Global/theme";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { HomeScreen } from "../Pages/HomeScreen";

const Stack = createNativeStackNavigator();

export const Routes = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });
  if (!fontsLoaded) {
    return;
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};
