import React, { Component } from "react";
import {
  View,
  Platform,
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default Screen;
