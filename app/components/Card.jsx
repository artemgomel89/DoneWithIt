import React from "react";

import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText/AppText";

const Card = ({ title, price, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>{price}</AppText>
      </View>
    </View>
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
    borderRadius: 15,
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
