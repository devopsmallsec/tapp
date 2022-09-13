import React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";
// utilities, etc.
import ROUTES from "../utils/routes";
import LandingScreen from "../screens/landing";
import HomeScreen from "../screens/home";
import AuthScreen from "../screens/auth";

interface LandingScreenProps {
  authenticated?: any;
}

const Stack = createStackNavigator();

function Main(props: LandingScreenProps) {
  const { authenticated } = props;
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={"light-content"}
        translucent={true}
        backgroundColor={"transparent"}
      />
      <Stack.Navigator
        initialRouteName={ROUTES.Landing}
        screenOptions={{
          headerTintColor: "#FFF",
        }}
      >
        {!authenticated ? (
          <>
            <Stack.Screen
              name={ROUTES.Landing}
              component={LandingScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={ROUTES.Authentication}
              component={AuthScreen}
              options={{
                headerShown: false,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name={ROUTES.HomeScreen}
              component={HomeScreen}
              options={{
                title: "Home Screen",
                headerShown: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
