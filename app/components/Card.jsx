import React from "react";
import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";

import colors from "../config/colors";
import AppText from "./AppText/AppText";
import { Image } from "react-native-expo-image-cache";

const Card = ({ title, price, imageUrl, onPress, style }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.card, style]}>
        <Image uri={imageUrl} style={styles.image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText style={styles.price} numberOfLines={3}>
            {price}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 5,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
