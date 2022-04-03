import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import Screen from "../components/Screen";

const ViewImageScreen = () => {
  return (
    <Screen style={styles.container}>
      <MaterialCommunityIcons
        name="close"
        style={styles.closeIcon}
        color="white"
        size={35}
      />
      <MaterialCommunityIcons
        name="trash-can-outline"
        style={styles.deleteIcon}
        color="white"
        size={35}
      />
      <Image
        style={styles.cover}
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
  },
  cover: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
  },
  closeIcon: {
    position: "absolute",
    top: 50,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 50,
    right: 30,
  },
});

export default ViewImageScreen;
