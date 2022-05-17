import React from "react";
import { View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({
  name,
  size = 35,
  backgroundColor = "black",
  iconColor = "white",
}) => (
  <View
    style={[
      {
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
      },
    ]}
  >
    <MaterialCommunityIcons name={name} color={iconColor} size={size / 2} />
  </View>
);

export default Icon;
