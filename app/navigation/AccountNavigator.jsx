import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountScreen from "../Screens/Account/AccountScreen";
import MyListingsScreen from "../Screens/Account/MyListingsScreen";
import MessagesNavigator from "./MessagesNavigator";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="AccountScreen"
      component={AccountScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="MessagesNavigator" component={MessagesNavigator} />
    <Stack.Screen name="MyListings" component={MyListingsScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
