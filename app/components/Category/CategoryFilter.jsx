import React, { useRef } from "react";

import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import CategoryFilterItem from "./CategoryFilterItem";
import categories from "../../store/categories";
import colors from "../../config/colors";

const CategoryFilter = () => {
  const scrollView = useRef();
  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollView}
        horizontal
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        {categories.map((item) => (
          <CategoryFilterItem
            id={item.id}
            label={item.label}
            key={"id" + item.id}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignSelf: "center",
    top: 0,
    zIndex: 10,
    paddingVertical: 10,
    width: Dimensions.get("window").width,
    backgroundColor: colors.white,
    opacity: 0.8,
  },
  flatList: {
    flexDirection: "row",
  },
});

export default CategoryFilter;
