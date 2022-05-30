import { Dimensions, StyleSheet } from "react-native";
import colors from "../../config/colors";

export const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: Dimensions.get("window").width,
    height: 200,
  },
  indicator: {
    justifyContent: "center",
    position: "relative",
    height: "77%",
  },
  contactTitle: { fontSize: 14 },
  contactSubtitle: { fontSize: 12, color: colors.gray },
  contentContainer: {
    paddingBottom: 0,
    flexGrow: 1,
    flexDirection: "column",
  },
  description: {
    marginVertical: 5,
  },
  contactItem: {
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "center",
  },
  priceBlock: {
    flexDirection: "row",
    alignItems: "center",
  },
  block: {
    padding: 10,
  },
  contactBlock: {
    flexDirection: "row",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
