import React from "react";
import { Image, View, StyleSheet, TouchableHighlight } from "react-native";

import AppText from "../AppText/AppText";
import colors from "../../config/colors";

import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = ({
  title,
  subTitle,
  time,
  image,
  onPress,
  renderRightActions,
  IconComponent,
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image source={image} style={styles.image} />}
            <View style={styles.text}>
              <View style={styles.topSection}>
                <AppText style={styles.title} numberOfLines={1}>
                  {title}
                </AppText>
                {time ? (
                  <AppText style={styles.time} numberOfLines={1}>
                    {time}
                  </AppText>
                ) : null}
              </View>
              {subTitle && (
                <AppText style={styles.subTitle} numberOfLines={2}>
                  {subTitle}
                </AppText>
              )}
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={20}
              color={colors.gray}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    justifyContent: "center",
  },
  topSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: "700",
    fontSize: 16,
  },
  time: {
    color: "gray",
    fontSize: 13,
    marginRight: 5,
  },
  subTitle: {
    color: "gray",
    fontSize: 14,
    width: "80%",
  },
});

export default ListItem;
