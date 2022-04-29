import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AuthContext from "../auth/context";

import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/lists/ListItemSeparator";

import colors from "../config/colors";
import useAuth from "../hooks/useAuth";

const menuItems = [
  {
    title: "My listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

const AccountScreen = ({ navigation }) => {
  const { user, logOut } = useAuth();

  return (
    <Screen style={{ backgroundColor: colors.light }}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/jacket.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Log out"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
          onPress={logOut}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginBottom: 10,
    backgroundColor: colors.white,
  },
});

export default AccountScreen;
