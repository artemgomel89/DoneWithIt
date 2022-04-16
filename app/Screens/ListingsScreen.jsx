import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import colors from "../config/colors";
import routes from "../navigation/routes";

import Screen from "../components/Screen";
import Card from "../components/Card";
import AppText from "../components/AppText/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";

import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";

const ListingsScreen = ({ navigation }) => {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>
          <AppButton title="Retry" onPress={getListingsApi.request} />
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            price={`${item.price} $`}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
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
    flex: 1,
    padding: 10,
  },
});

export default ListingsScreen;
