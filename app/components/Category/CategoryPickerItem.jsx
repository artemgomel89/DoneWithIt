import React from "react";

import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "../icons/Icon";
import AppText from "../AppText/AppText";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.item}>
          <Icon
            backgroundColor={item.backgroundColor}
            name={item.icon}
            size={80}
            style={styles.icon}
          />
        </View>
        <AppText style={styles.text}>{item.label}</AppText>
      </TouchableOpacity>
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
  item: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});

export default CategoryPickerItem;
