import React, { useCallback, useContext, useState } from "react";

import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import AppText from "../AppText/AppText";

import colors from "../../config/colors";
import AppContext from "../../auth/context";

const CategoryFilterItem = ({ id, label }) => {
  const [active, setActive] = useState(false);
  const { categoriesToFilter, setCategoriesToFilter } = useContext(AppContext);

  const toggleFilter = useCallback(() => {
    if (active) {
      setCategoriesToFilter(categoriesToFilter.filter((item) => item !== id));
      setActive(false);
    } else {
      setActive(true);
      setCategoriesToFilter([...categoriesToFilter, id]);
    }
  }, [active]);

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
