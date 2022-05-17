import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import defaultStyles from "../../config/styles";

const AppTextInput = ({ iconName, style, width, ...otherProps }) => {
  return (
    <View style={[styles.container, style, { width }]}>
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
    padding: 15,
    borderRadius: 45,
    backgroundColor: colors.formColor,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    width: "100%",
  },
});

export default AppTextInput;
