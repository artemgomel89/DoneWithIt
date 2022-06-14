import React, { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import colors from "../config/colors";
import routes from "../navigation/routes";

import Screen from "../components/Screen";
import Card from "../components/Card";
import ActivityIndicator from "../components/network/ActivityIndicator";
import DataMissing from "../components/network/DataMissing";

import CategoryFilter from "../components/Category/CategoryFilter";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

import { RootState } from "../store";
import { fetchListings } from "../store/ActionCreators";

const ListingsScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useAppDispatch();
  const listings = useAppSelector((state) => state.listings);
  console.log("11123efervkmrlvmrlvmfdv", listings.data);

  const categoriesToFilter = useAppSelector(
    (state: RootState) => state.categoriesToFilter.categoriesToFilter
  );

  const filteredListings = (categoriesToFilter) => {
    if (!listings.data) return null;
    if (categoriesToFilter.length === 0) return listings.data;
    return listings.data.filter((item) =>
      categoriesToFilter.includes(item.categoryId)
    );
  };

  useEffect(() => {
    dispatch(fetchListings());
  }, []);

  return (
    <>
      {<ActivityIndicator visible={listings.isLoading} /> && !refreshing}
      <Screen style={styles.screen} barBgColor={colors.light}>
        {!!listings.error && (
          <DataMissing refreshing={refreshing} setRefreshing={setRefreshing} />
        )}

        {listings.data.length > 0 ? <CategoryFilter /> : null}

        <FlatList
          style={styles.flatlist}
          data={filteredListings(categoriesToFilter)}
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
          onRefresh={() => {
            if (refreshing) return;
            setRefreshing(true);
            dispatch(fetchListings());
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
    paddingHorizontal: 10,
  },
  flatlist: {
    paddingHorizontal: 5,
  },
});

export default ListingsScreen;
