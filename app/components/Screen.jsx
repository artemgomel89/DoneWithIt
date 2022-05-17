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

const Screen = ({ children, style, barBgColor, translucent = false }) => {
  const setAndroidBg = async () => {
    if (Platform.OS === "android") {
      await NavigationBar.setBackgroundColorAsync(colors.white);
      await NavigationBar.setButtonStyleAsync("dark");
    }
  };

  useEffect(() => {
    setAndroidBg();
  });

  return (
    <SafeAreaView style={[styles.screen, style]}>
      <StatusBar
        backgroundColor={barBgColor}
        barStyle="dark-content"
        translucent={translucent}
      />
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
export default Screen;
