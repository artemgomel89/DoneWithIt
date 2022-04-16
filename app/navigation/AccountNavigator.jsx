import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountScreen from "../Screens/AccountScreen";
import MessagesScreen from "../Screens/MesssagesScreen";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="ListingsScreen"
      component={AccountScreen}
      options={{ headerShown: false, title: null }}
    />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
