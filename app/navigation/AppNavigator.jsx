import React from "react";
import navigation from "../navigation/rootNavigation";

import useNotifications from "../hooks/useNotifications";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTabs from "./HomeTabs";
import ListingDetailsScreen from "../Screens/ListingDetailsScreen";
import MyListingsScreen from "../Screens/Account/MyListingsScreen";
import MessagesNavigator from "./MessagesNavigator";

const AppNavigator = () => {
  useNotifications(() => nav("Messages"));

  const nav = (path) => {
    navigation.navigate(path);
  };

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListingDetails"
        component={ListingDetailsScreen}
        options={{ presentation: "modal", headerShown: false }}
      />
      <Stack.Screen name="Messages" component={MessagesNavigator} />
      <Stack.Screen name="MyListings" component={MyListingsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
