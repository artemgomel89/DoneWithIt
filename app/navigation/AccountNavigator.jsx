import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountScreen from "../Screens/AccountScreen";
import MessagesScreen from "../Screens/MesssagesScreen";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="AccountScreen"
      component={AccountScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
