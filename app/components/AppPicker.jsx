import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import AppText from "./AppText/AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

const AppPicker = ({
  PickerItemComponent = PickerItem,
  iconName,
  placeholder,
  items,
  selectedItem,
  onSelectItem,
  width,
  numOfColumns = 1,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {iconName && (
            <MaterialCommunityIcons
              name={iconName}
              size={20}
              color={colors.gray}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.gray}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            numColumns={numOfColumns}
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                numOfColumns={numOfColumns}
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                  console.log("clicKED!!!!!");
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 25,
    backgroundColor: defaultStyles.colors.light,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  text: {
    flex: 1,
  },
  textInput: {
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: colors.gray,
  },
});

export default AppPicker;
