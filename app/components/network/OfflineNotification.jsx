import React from "react";
import { View, StyleSheet, Platform } from "react-native";

import colors from "../../config/colors";
import AppText from "../AppText/AppText";
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
    height: Platform.OS === "android" ? 30 : 60,
    width: "100%",
    backgroundColor: colors.primary,
    justifyContent: Platform.OS === "android" ? "center" : "flex-end",
    alignItems: "center",
    paddingBottom: 3,
  },
  text: {
    color: colors.white,
    textAlign: "center",
  },
});

export default OfflineNotification;
