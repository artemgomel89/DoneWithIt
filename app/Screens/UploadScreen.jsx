import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import * as Progress from "react-native-progress";

import colors from "../config/colors";
import LottieView from "lottie-react-native";

const UploadScreen = ({ progress, modalVisible, setModalVisible }) => {
  return (
    <Modal visible={modalVisible}>
      <View style={styles.container}>
        {progress < 1 && progress > 0 ? (
          <Progress.Bar
            width={200}
            color={colors.primary}
            progress={progress}
          />
        ) : (
          <LottieView
            autoPlay
            source={require("../assets/animation/33886-check-okey-done.json")}
            loop={false}
            style={styles.animation}
            onAnimationFinish={() => setModalVisible(false)}
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
