import React from "react";

import { StyleSheet, View } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText/AppText";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <Icon
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={80}
        style={styles.icon}
      />
      <AppText style={styles.text}>{item.label}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "33%",
  },
  icon: {
    marginRight: 15,
    marginBottom: 10,
  },
  text: {
    textAlign: "center",
    marginTop: 5,
  },
});

export default CategoryPickerItem;
