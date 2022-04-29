import React from "react";

import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import colors from "../config/colors";

const AppButton = ({ title, onPress, color = "primary", style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, { backgroundColor: colors[color] }, style]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
  },
});
export default AppButton;
