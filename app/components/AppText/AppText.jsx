import React from "react";

import { Text } from "react-native";
import textStyle from "./textStyle";

const AppText = ({ children, style }) => {
  return <Text style={[textStyle.text, style]}>{children}</Text>;
};

export default AppText;
