import React from "react";

import { FlatList, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import UserItemSeparator from "../components/UserItemSeparator";

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
  },
];

const AccountScreen = () => {
  return (
    <Screen style={{ backgroundColor: colors.light }}>
      <View style={styles.container}>
        <ListItem
          title="Artsem Samonau"
          subTitle="artem@gmail.com"
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
            />
          )}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={UserItemSeparator}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Log out"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
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
