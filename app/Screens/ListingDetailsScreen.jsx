import React, { useContext, useEffect, useState } from "react";
import { Dimensions } from "react-native";
import {
  Platform,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import Screen from "../components/Screen";
import AppText from "../components/AppText/AppText";
import ContactSellerForm from "../components/forms/ContactSellerForm";
import getUserData from "../api/user";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";
import AppContext from "../auth/context";
import CloseIcon from "../components/CloseIcon";

const ListingDetailsScreen = ({ route, navigation }) => {
  const { user } = useContext(AppContext);
  const [userData, setUserData] = useState({ name: "Michael", email: "krrom" });
  const { loading, request } = useApi(getUserData);

  const getData = async () => {
    const resp = await request(route.params.userId);
    if (!resp) return;
    setUserData(resp.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const listing = route.params;
  return (
    <Screen style={styles.screen}>
      {<ActivityIndicator visible={loading} />}
      <CloseIcon onPress={() => navigation.goBack()} />
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 350}
      >
        <View style={{ width: "100%" }}>
          <ScrollView horizontal pagingEnabled>
            {listing.images.map((image) => {
              return (
                <Image
                  uri={image.url}
                  preview={{ uri: image.thumbnailUrl }}
                  tint="light"
                  style={[styles.image]}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.detailsContainer}>
            <View style={styles.block}>
              <AppText style={styles.title}>{listing.title}</AppText>
              <AppText style={styles.text}>{listing.description}</AppText>
              <View style={styles.priceBlock}>
                <AppText>Price:</AppText>
                <AppText style={styles.price}> {listing.price}$</AppText>
              </View>
            </View>
            <View style={styles.block}>
              <AppText style={styles.text}>Name: {userData.name}</AppText>
              <AppText style={styles.text}>Email: {userData.email}</AppText>
            </View>
          </View>
          <ContactSellerForm listing={listing} userId={user.userId} />
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 5,
  },
  image: {
    backgroundColor: "green",
    width: Dimensions.get("window").width,
    height: 200,
  },
  contentContainer: {
    justifyContent: "space-between",
    height: "77%",
    paddingHorizontal: 15,
  },
  detailsContainer: {
    paddingVertical: 20,
  },
  priceBlock: {
    flexDirection: "row",
    alignItems: "center",
  },
  block: {
    backgroundColor: colors.middleLight,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  contactsBlock: {},
  title: {
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default ListingDetailsScreen;
