import React, { useContext, useState } from "react";

import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackComponent,
} from "react-native";
import AppText from "../AppText/AppText";

import colors from "../../config/colors";
import AppContext from "../../auth/context";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

const CategoryFilterItem = ({ id, label }) => {
  const [active, setActive] = useState(false);
  const { categoriesToFilter, setCategoriesToFilter } = useContext(AppContext);

  const toggleFilter = () => {
    if (active) {
      setCategoriesToFilter(categoriesToFilter.filter((item) => item !== id));
      setActive(false);
    } else {
      setActive(true);
      setCategoriesToFilter([...categoriesToFilter, id]);
    }
  };

  return (
    <View style={[styles.container, active ? styles.active : null]}>
      <TouchableWithoutFeedback onPress={toggleFilter}>
        <AppText>{label}</AppText>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e3d48f",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  active: {
    backgroundColor: colors.primary,
  },
});

export default CategoryFilterItem;
