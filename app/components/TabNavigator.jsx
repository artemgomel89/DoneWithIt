import React from "react";

import { View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingsScreen from "../Screens/ListingsScreen";
import ListingEditScreen from "../Screens/ListingEditScreen";

import AccountNavigator from "../navigation/AccountNavigator";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
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
      }}
    >
      <Tab.Screen
        name="Feed"
        component={ListingsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={ListingEditScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <View
              style={{
                backgroundColor: colors.primary,
                width: size * 2,
                height: size * 2,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: size,
              }}
            >
              <MaterialCommunityIcons
                name="plus-circle"
                size={35}
                color="white"
              />
            </View>
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name="Account"
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

export default TabNavigator;
