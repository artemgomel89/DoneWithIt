import React from "react";
import { StyleSheet, View } from "react-native";

import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import Screen from "../components/Screen";
import AppText from "../components/AppText/AppText";
import ListItem from "../components/lists/ListItem";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;
  return (
    <Screen>
      <Image
        uri={listing.images[0].url}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.price}>{listing.price}$</AppText>
        </View>
        <ListItem
          title="Josh"
          subTitle="5 listings"
          image={require("../../app/assets/jacket.jpg")}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  contentContainer: {
    paddingLeft: 20,
  },
  detailsContainer: {
    paddingVertical: 20,
  },
  title: {
    marginBottom: 5,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default ListingDetailsScreen;
