import { Dimensions, StatusBar } from "react-native";

const DIMENSIONS = {
  SCREEN_HEIGHT: Dimensions.get("screen").height, // device height
  STATUS_BAR_HEIGHT: StatusBar.currentHeight || 24,
  WINDOW_HEIGHT: Dimensions.get("window").height,
};

export const BOTTOM_BAR_HEIGHT =
  DIMENSIONS.SCREEN_HEIGHT -
  (DIMENSIONS.STATUS_BAR_HEIGHT + DIMENSIONS.WINDOW_HEIGHT);

export default DIMENSIONS;
