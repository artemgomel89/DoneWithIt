import React from "react";
import { StyleSheet } from "react-native";

import colors from "../../config/colors";
import Icon from "./Icon";

const UserIcon = () => (
  <Icon
    name="account"
    size={35}
    style={styles.icon}
    backgroundColor={colors.gray}
  />
);

const styles = StyleSheet.create({
  icon: {
    marginRight: 5,
  },
});

export default UserIcon;
