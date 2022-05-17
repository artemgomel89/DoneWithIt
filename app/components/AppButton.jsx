import React from "react";

import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import colors from "../config/colors";

const AppButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, style]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    width: "100%",
    marginVertical: 5,
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
  },
});
export default AppButton;
