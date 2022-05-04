import React from "react";

import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItemDeleteAction = ({ onPress, style }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.iconContaier, style]}>
          <MaterialCommunityIcons name="trash-can" size={35} color="white" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingLeft: 10,
  },
  iconContaier: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
  },
});

export default ListItemDeleteAction;
