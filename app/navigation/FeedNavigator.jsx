import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingsScreen from "../Screens/ListingsScreen";
import ListingDetailsScreen from "../Screens/ListingDetailsScreen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{ presentation: "modal", headerShown: false }}
  >
    <Stack.Screen
      name={routes.LISTINGS_SCREEN}
      component={ListingsScreen}
      options={{ title: "Listings" }}
    />
    <Stack.Screen
      name={routes.LISTING_DETAILS}
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
