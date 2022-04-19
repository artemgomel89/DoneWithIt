import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText/AppText";
import { useNetInfo } from "@react-native-community/netinfo";

const OfflineNotification = () => {
  const netInfo = useNetInfo();

  return netInfo.type !== "unknown" && !netInfo.isInternetReachable ? (
    <View style={styles.container}>
      <AppText style={styles.text}>No internet connection</AppText>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    textAlign: "center",
  },
});

export default OfflineNotification;
