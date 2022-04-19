import React from "react";
import { StyleSheet } from "react-native";
import AppText from "./AppText/AppText";
import AppButton from "./AppButton";
import useApi from "../hooks/useApi";
import listingsApi from "../api/listings";

const DataMissing = () => {
  const getListingsApi = useApi(listingsApi.getListings);
  return (
    <>
      <AppText>Couldn't retrieve the listings</AppText>
      <AppButton
        title="Retry"
        onPress={getListingsApi.request}
        style={styles.button}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
  },
});

export default DataMissing;
