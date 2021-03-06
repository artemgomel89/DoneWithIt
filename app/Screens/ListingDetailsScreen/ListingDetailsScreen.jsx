import React, { useContext, useEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";

import AppContext from "../../auth/context";
import getUserData from "../../api/user";
import useApi from "../../hooks/useApi";

import AppText from "../../components/AppText/AppText";
import ContactSellerForm from "../../components/forms/ContactSellerForm";
import ActivityIndicator from "../../components/network/ActivityIndicator";
import CloseIcon from "../../components/icons/BackIcon";
import Map from "../../components/Map";
import UserIcon from "../../components/icons/UserIcon";

import { Image } from "react-native-expo-image-cache";
import colors from "../../config/colors";
import { styles } from "./style";

const ListingDetailsScreen = ({ route, navigation }) => {
  const listing = route.params;
  const { user } = useContext(AppContext);
  const [userData, setUserData] = useState({ name: "Michael", email: "krrom" });
  const { loading, request } = useApi(getUserData);

  const getData = async () => {
    const resp = await request(route.params.userId);
    if (!resp) return;
    setUserData(resp.data);
  };

  const navigateToAccount = (userId, listingUserID, path) => {
    if (userId !== listingUserID) return;
    navigation.navigate(path);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.screen}>
      <CloseIcon onPress={() => navigation.goBack()} color={colors.gray} />
      <View style={{ width: "100%" }}>
        <ScrollView horizontal pagingEnabled>
          {listing.images.map((image) => {
            return (
              <Image
                key={image.url + "id"}
                uri={image.url}
                preview={{ uri: image.thumbnailUrl }}
                tint="light"
                style={[styles.image]}
              />
            );
          })}
        </ScrollView>
      </View>
      {!loading ? (
        <View style={styles.contentContainer}>
          <View style={styles.detailsContainer}>
            <View style={styles.block}>
              <AppText style={styles.title}>{listing.title}</AppText>
              <AppText style={styles.description}>
                {listing.description}
              </AppText>
              <View style={styles.priceBlock}>
                <AppText>Price:</AppText>
                <AppText style={styles.price}> {listing.price}$</AppText>
              </View>
            </View>
            <View style={[styles.block, styles.contactBlock]}>
              <TouchableOpacity
                onPress={() =>
                  navigateToAccount(user.userId, listing.userId, "Account")
                }
              >
                <View style={styles.contactItem}>
                  <UserIcon style={{ marginRight: 7 }} />
                  <View>
                    <AppText style={[styles.text, styles.contactTitle]}>
                      {userData.name}
                    </AppText>
                    <AppText style={[styles.text, styles.contactSubtitle]}>
                      {userData.listings} Listing(s)
                    </AppText>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Map location={listing.location} />
          <ContactSellerForm listing={listing} userId={user.userId} />
        </View>
      ) : (
        <ActivityIndicator visible={true} style={styles.indicator} />
      )}
    </View>
  );
};

export default ListingDetailsScreen;
