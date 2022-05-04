import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountScreen from "../Screens/AccountScreen";
import MessagesScreen from "../Screens/MesssagesScreen";
import MyListings from "../Screens/MyListingsScreen";
import MyListingsScreen from "../Screens/MyListingsScreen";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="AccountScreen"
      component={AccountScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen name="MyListings" component={MyListingsScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
