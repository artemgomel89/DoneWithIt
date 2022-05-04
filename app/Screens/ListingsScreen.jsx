import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import colors from "../config/colors";
import routes from "../navigation/routes";

import Screen from "../components/Screen";
import Card from "../components/Card";
import ActivityIndicator from "../components/ActivityIndicator";
import DataMissing from "../components/DataMissing";

import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";

import AuthContext from "../auth/context";
import CategoryFilter from "../components/CategoryFilter";

const ListingsScreen = ({ navigation }) => {
  const { listings, setListings, categoriesToFilter } = useContext(AuthContext);

  const getListingsApi = useApi(listingsApi.getListings);
  const [refreshing, setRefreshing] = useState(false);

  const filterListings = (categoriesArr) => {
    if (!listings) return null;
    if (categoriesArr.length === 0) return listings;
    return listings.filter((item) => categoriesArr.includes(item.categoryId));
  };

  const getListings = async () => {
    const resp = await getListingsApi.request();
    if (!resp.ok) return;
    setListings(resp.data.reverse());
  };

  useEffect(() => {
    getListings();
  }, []);

  return (
    <>
      {<ActivityIndicator visible={getListingsApi.loading} /> && !refreshing}
      <Screen style={styles.screen}>
        {getListingsApi.error && (
          <DataMissing refreshing={refreshing} setRefreshing={setRefreshing} />
        )}

        {listings.length > 0 ? <CategoryFilter /> : null}

        <FlatList
          style={styles.flatlist}
          data={filterListings(categoriesToFilter)}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              price={`${item.price} $`}
              imageUrl={item.images[0].url}
              thumbnailUri={item.images[0].thumbnailUrl}
              onPress={() => {
                navigation.navigate(routes.LISTING_DETAILS, item);
              }}
            />
          )}
          keyExtractor={(listing) => listing.id.toString()}
          refreshing={refreshing}
          onRefresh={async () => {
            if (refreshing) return;
            setRefreshing(true);
            await getListings();
            setRefreshing(false);
          }}
        />
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  flatlist: {
    paddingHorizontal: 5,
  },
});

export default ListingsScreen;
