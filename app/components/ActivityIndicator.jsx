import React from "react";

import LottieView from "lottie-react-native";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <LottieView
      source={require("../assets/animation/98432-loading.json")}
      autoPlay
      loop
    />
  );
};

export default ActivityIndicator;
