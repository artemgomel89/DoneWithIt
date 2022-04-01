import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, SafeAreaView } from "react-native";

const Screen = ({ children, style }) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex:1
  },
});
export default Screen;
