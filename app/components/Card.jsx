import React from "react";
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Image,
} from "react-native";

import colors from "../config/colors";
import AppText from "./AppText/AppText";

const Card = ({ title, price, imageUrl, onPress, thumbnailUri }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.card]}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
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
    marginVertical: 10,
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
