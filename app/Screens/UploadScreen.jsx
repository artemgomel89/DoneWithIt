import React from "react";
import { View, StyleSheet, Modal } from "react-native";

import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";
import colors from "../config/colors";

const UploadScreen = ({ progress = 0, visible = false, onDone }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            width={200}
            progress={progress}
          />
        ) : (
          <LottieView
            autoPlay
            source={require("../assets/animation/102943-done.json")}
            loop={false}
            style={styles.animation}
            onAnimationFinish={onDone}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: 150,
  },
});

export default UploadScreen;
