import * as React from "react";

import { NavigationContainer, useNavigation } from "@react-navigation/native";

import navigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import * as NavigationBar from "expo-navigation-bar";

/*
const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};*/

function App() {
  NavigationBar.setBackgroundColorAsync("white");
  NavigationBar.setButtonStyleAsync("dark");
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
