import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

const AppTextInput = ({ iconName, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={20}
          color={colors.gray}
          style={styles.icon}
        />
      )}
      <TextInput
        style={[styles.textInput, defaultStyles.text]}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    borderRadius: 25,
    backgroundColor: defaultStyles.colors.light,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  textInput: {
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
