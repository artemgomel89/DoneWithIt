import React from "react";

import { Image, View, StyleSheet } from "react-native";
import AppText from "./AppText/AppText";

const UserItem = ({ title, subTitle, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
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

export default UserItem;
