import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingEditScreen from "../Screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.gray,
      tabBarActiveBackgroundColor: colors.white,
      tabBarStyle: [
        {
          display: "flex",
        },
      ],
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Listings"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name={routes.LISTING_EDIT}
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarIcon: () => (
          <NewListingButton
            size={80}
            onPress={() => navigation.navigate(routes.LISTING_EDIT)}
          />
        ),
        tabBarLabel: () => {
          return null;
        },
      })}
    />
    <Tab.Screen
      name={routes.ACCOUNT}
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
