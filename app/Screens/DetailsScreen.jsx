import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
const DetailsScreen = () => {
  return (
    <Screen>
      <Image
        source={require("../../app/assets/jacket.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.contentContainer}>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>Red jacket for sale</AppText>
          <AppText style={styles.price}>100$</AppText>
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

export default DetailsScreen;
