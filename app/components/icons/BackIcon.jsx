import React from "react";

import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

const BackIcon = ({ onPress, color }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons
        name="keyboard-backspace"
        size={30}
        color={color}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    opacity: 0.7,
    backgroundColor: colors.light,
    borderRadius: 20,
    position: "absolute",
    left: 10,
    top: 30,
    zIndex: 1,
  },
});

export default BackIcon;
