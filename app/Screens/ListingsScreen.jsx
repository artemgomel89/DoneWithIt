import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import colors from "../config/colors";
import routes from "../navigation/routes";

import Screen from "../components/Screen";
import Card from "../components/Card";
import ActivityIndicator from "../components/ActivityIndicator";

import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";
import OfflineNotification from "../components/OfflineNotification";
import DataMissing from "../components/DataMissing";

const ListingsScreen = ({ navigation }) => {
  const getListingsApi = useApi(listingsApi.getListings);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      <OfflineNotification />
      {getListingsApi.error && <DataMissing />}

      {<ActivityIndicator visible={getListingsApi.loading} /> && !refreshing}

      <FlatList
        style={styles.flatlist}
        data={getListingsApi.data}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            price={`${item.price} $`}
            imageUrl={item.images[0].url}
            thumbnailUri={item.images[0].thumbnailUrl}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
        keyExtractor={(listing) => listing.id.toString()}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          getListingsApi.request();
          setRefreshing(false);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    flex: 1,
    paddingTop: 5,
  },
  flatlist: {
    paddingHorizontal: 5,
  },
});

export default ListingsScreen;
