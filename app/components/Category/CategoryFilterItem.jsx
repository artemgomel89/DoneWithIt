import React, { useState } from "react";

import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import AppText from "../AppText/AppText";

import colors from "../../config/colors";
import { useAppDispatch } from "../../hooks/redux";
import { setCategoriesToFilter } from "../../store/reducers/categoryFilterSlice";

const CategoryFilterItem = ({ id, label }) => {
  const [active, setActive] = useState(false);
  const dispatch = useAppDispatch();

  const toggleFilter = () => {
    dispatch(setCategoriesToFilter({ id, active }));
    setActive(!active);
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
