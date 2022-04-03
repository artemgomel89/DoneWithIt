import React from "react";

import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText/AppText";

const PickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AppText>{label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default PickerItem;
