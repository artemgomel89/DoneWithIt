import { Platform, StyleSheet } from "react-native";
import colors from "../../colors";

const textStyle = StyleSheet.create({
  text: {
    fontSize: 20,
    color: colors.black,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default textStyle;
