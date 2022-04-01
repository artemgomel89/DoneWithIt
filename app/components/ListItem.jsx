import React from "react";

import { Image, View, StyleSheet, TouchableHighlight } from "react-native";
import AppText from "./AppText/AppText";
import colors from "../colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {GestureHandlerRootView} from "react-native-gesture-handler";

const ListItem = ({ title, subTitle, image, onPress, renderRightActions }) => {
  return (
      <GestureHandlerRootView>
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
        </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  title: {
    fontWeight: "700",
    fontSize: 16,
  },
  subTitle: {
    color: "gray",
    fontSize: 16,
  },
});

export default ListItem;
