import React from "react";

import colors from "../../config/colors";
import Icon from "./Icon";

const UserIcon = ({ style }) => (
  <Icon name="account" size={35} style={style} backgroundColor={colors.gray} />
);

export default UserIcon;
