import React from "react";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { View } from "react-native";

const MyListingCard = ({ renderRightActions, children }) => {
  return (
    <View
      style={{
        marginBottom: 20,
      }}
    >
      <GestureHandlerRootView>
        <Swipeable renderRightActions={renderRightActions}>
          {children}
        </Swipeable>
      </GestureHandlerRootView>
    </View>
  );
};

export default MyListingCard;
