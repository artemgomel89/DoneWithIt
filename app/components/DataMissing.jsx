import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText/AppText";
import AppButton from "./AppButton";
import useApi from "../hooks/useApi";
import listingsApi from "../api/listings";

const DataMissing = () => {
  const getListingsApi = useApi(listingsApi.getListings);
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>Couldn't retrieve the listings</AppText>
      <AppButton
        title="Retry"
        onPress={getListingsApi.request}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    paddingTop: 50,
    textAlign: "center",
  },
});

export default DataMissing;
