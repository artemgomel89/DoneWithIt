import React from "react";
import { Platform, StyleSheet, View } from "react-native";

import Screen from "../../components/Screen";
import Welcome from "../../components/WelcomeScreen";

const WelcomeScreen = ({ navigation }) => {
  return Platform.OS === "android" ? (
    <Screen style={styles.wrapper} barBgColor="transparent" translucent={true}>
      <Welcome navigation={navigation} />
    </Screen>
  ) : (
    <View
      style={styles.wrapper}
      navigation={navigation}
      barBgColor="transparent"
    >
      <Welcome navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default WelcomeScreen;
