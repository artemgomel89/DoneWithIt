import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MessagesScreen from "../Screens/Account/MesssagesScreen";
import DialogScreen from "../Screens/Account/DialogScreen";

const Stack = createNativeStackNavigator();

const MessagesNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Messages"
      component={MessagesScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Dialog"
      component={DialogScreen}
      options={({ route }) => ({
        title: route.params.userName,
      })}
    />
  </Stack.Navigator>
);

export default MessagesNavigator;
