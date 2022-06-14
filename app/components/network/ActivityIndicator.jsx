import React from "react";

import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";
import colors from "../../config/colors";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <View style={[styles.overlay]}>
      <LottieView
        source={require("../../assets/animation/loading.json")}
        autoPlay
        loop
        style={styles.loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 50,
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
    position: "absolute",
    zIndex: 1,
    opacity: 0.8,
  },
  loading: {
    width: 200,
    height: 200,
  },
});

export default ActivityIndicator;
