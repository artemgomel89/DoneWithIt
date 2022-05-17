import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import AppContext from "../../auth/context";
import useApi from "../../hooks/useApi";
import apiClient from "../../api/listings";
import listingsApi from "../../api/listings";

import Card from "../../components/Card";
import AppText from "../../components/AppText/AppText";
import ActivityIndicator from "../../components/network/ActivityIndicator";
import DataMissing from "../../components/network/DataMissing";
import ListItemDeleteAction from "../../components/lists/ListItemDeleteAction";
import MyListingCard from "../../components/MyListingCard";

import colors from "../../config/colors";

const MyListings = () => {
  const { listings, setListings, user } = useContext(AppContext);

  const getListingsApi = useApi(listingsApi.getListings);
  const [refreshing, setRefreshing] = useState(false);
  const myListings = listings.filter(
    (listing) => listing.userId === user.userId
  );

  const getListings = async () => {
    const resp = await getListingsApi.request();
    if (!resp.ok) return;
    setListings(resp.data.reverse());
  };

  const handleDelete = (id) => {
    const updatedListings = listings.filter((el) => el.id !== id);
    setListings(updatedListings);
    apiClient.deleteListing(id);
  };

  useEffect(() => {
    getListings();
  }, []);

  return (
    <>
      {<ActivityIndicator visible={true} /> && !refreshing}
      <View style={styles.screen}>
        {getListingsApi.error && (
          <DataMissing refreshing={refreshing} setRefreshing={setRefreshing} />
        )}
        {myListings.length > 0 && getListingsApi.error ? (
          <View
            style={styles.noListingContainer}
            refreshing={refreshing}
            onRefresh={async () => {
              setRefreshing(true);
              await getListingsApi.request();
              setRefreshing(false);
            }}
          >
            <AppText style={styles.noListings}>
              You don't have listings :(
            </AppText>
          </View>
        ) : (
          <FlatList
            style={styles.flatlist}
            data={myListings}
            renderItem={({ item }) => (
              <MyListingCard
                renderRightActions={() => (
                  <ListItemDeleteAction
                    onPress={() => handleDelete(item.id)}
                    style={styles.deleteAction}
                  />
                )}
              >
                <Card
                  style={styles.card}
                  title={item.title}
                  price={`${item.price} $`}
                  imageUrl={item.images[0].url}
                  thumbnailUri={item.images[0].thumbnailUrl}
                />
              </MyListingCard>
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
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    flex: 1,
    paddingHorizontal: 15,
  },
  deleteAction: {
    height: "20%",
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: colors.gray,
  },
  card: {
    marginBottom: 0,
  },
  noListingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noListings: {
    alignSelf: "center",
    color: colors.textWarn,
  },
});

export default MyListings;
