import colors from "./colors";
import { Platform } from "react-native";

const defaultStyles = {
  colors,
  text: {
    fontSize: 18,
    color: colors.black,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};

export default defaultStyles;
