import React from "react";

import { Text, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const NewListingButton = ({ size, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: colors.primary,
          borderWidth: size / 8,
          borderColor: colors.white,
          width: size,
          height: size,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: size / 2,
          bottom: 20,
        }}
      >
        <MaterialCommunityIcons
          name="plus-circle"
          size={size / 2}
          color="white"
        />
      </View>
    </TouchableOpacity>
  );
};

export default NewListingButton;
