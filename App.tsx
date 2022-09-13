import LandingScreen from "./src/screens/landing";
import "react-native-gesture-handler";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import React from "react";
import MainNavigation from "./src/navigation/Main";

const App = () => {
  let [fontsLoaded] = useFonts({
    "Montserrat-Black": require("./assets/fonts/Montserrat-Black.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <MainNavigation />;
};

export default App;
