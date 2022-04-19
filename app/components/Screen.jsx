import React, { useEffect } from "react";
import {
  View,
  Platform,
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import colors from "../config/colors";
import * as NavigationBar from "expo-navigation-bar";

const Screen = ({ children, style }) => {
  const setAndroidBg = async () => {
    if (Platform.OS === "android") {
      await NavigationBar.setBackgroundColorAsync("white");
      await NavigationBar.setButtonStyleAsync("dark");
    }
  };

  useEffect(() => {
    setAndroidBg();
  });

  return (
    <SafeAreaView style={[styles.screen, style]}>
      <StatusBar backgroundColor={colors.light} barStyle="dark-content" />
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
