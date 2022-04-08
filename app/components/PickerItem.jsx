import React from "react";

import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText/AppText";

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AppText>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default PickerItem;
