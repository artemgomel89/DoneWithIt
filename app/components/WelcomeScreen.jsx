import React from "react";
import { View, StyleSheet, Image, Text, ImageBackground } from "react-native";

import AppButton from "./AppButton";
import colors from "../config/colors";

const Welcome = ({ navigation }) => (
  <ImageBackground
    blurRadius={5}
    style={styles.cover}
    source={require("../assets/background.jpg")}
  >
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Text style={styles.title}>Sell what you don't need</Text>
    </View>
    <View style={styles.buttonsContainer}>
      <AppButton
        title="Log in"
        color="primary"
        onPress={() => navigation.navigate("Login")}
        style={styles.button}
      />
      <AppButton
        title="Register"
        color="secondary"
        onPress={() => navigation.navigate("Register")}
        style={styles.button}
      />
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  cover: {
    flexGrow: 1,
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-end",
  },
  logoContainer: {
    position: "absolute",
    top: 150,
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
    paddingVertical: 20,
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
  },
  button: {
    backgroundColor: colors.primary,
    width: "70%",
    paddingVertical: 10,
  },
});

export default Welcome;
