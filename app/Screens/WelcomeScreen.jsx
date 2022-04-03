import React from "react";

import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        blurRadius={10}
        style={styles.cover}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          />
          <Text style={styles.title}>Sell what you don't need</Text>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton title="Login" color="primary" />
          <AppButton title="Register" color="secondary" />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
  },
  cover: {
    flexGrow: 1,
    paddingTop: 100,
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-end",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
  },
  signInButton: {
    backgroundColor: colors.primary,
    height: 50,
    width: "100%",
  },
  signUpButton: {
    backgroundColor: colors.secondary,
    height: 50,
    width: "100%",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
