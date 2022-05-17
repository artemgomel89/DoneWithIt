import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingEditScreen from "../Screens/ListingEditScreen";
import NewListingButton from "./NewListingButton";
import ListingsScreen from "../Screens/ListingsScreen";
import AccountScreen from "../Screens/Account/AccountScreen";
import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
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
        component={ListingsScreen}
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
        component={AccountScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
