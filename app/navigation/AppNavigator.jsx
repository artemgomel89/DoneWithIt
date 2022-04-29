import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import routes from "./routes";
import colors from "../config/colors";

import ListingEditScreen from "../Screens/ListingEditScreen";
import navigation from "../navigation/rootNavigation";

import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import useNotifications from "../hooks/useNotifications";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useNotifications(() => nav("Account"));

  const nav = (path) => {
    navigation.navigate(path);
  };

  return (
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
              size={70}
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
};

export default AppNavigator;
