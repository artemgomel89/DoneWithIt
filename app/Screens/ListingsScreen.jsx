import React from "react";

import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";

const listingData = [
  {
    id: 1,
    title: "red jacket",
    price: 25,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "green jacket",
    price: 150,
    image: require("../assets/jacket-green.jpg"),
  },
  {
    id: 3,
    title: "black pants",
    price: 220,
    image: require("../assets/jacket.jpg"),
  },
];
const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listingData}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            price={`${item.price} $`}
            image={item.image}
          />
        )}
        keyExtractor={(listing) => listing.id.toString()}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20,
  },
});

export default ListingsScreen;
