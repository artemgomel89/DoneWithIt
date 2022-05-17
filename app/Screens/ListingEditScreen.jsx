import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";

import * as Yup from "yup";

import AppContext from "../auth/context";
import listingsApi from "../api/listings";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";

import colors from "../config/colors";

import CategoryPickerItem from "../components/Category/CategoryPickerItem";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

import categories from "../store/categories";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).max(25).label("Title"),
  price: Yup.number().required().max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array()
    .min(1, "Please select at least 1 image")
    .max(3, "You can add only 3 images"),
});

const ListingEditScreen = () => {
  const { user } = useContext(AppContext);
  const userId = user.userId;
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setModalVisible(true);

    const result = await listingsApi.addListing(
      { ...listing, location, userId },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      return alert("Could not save the listing.");
    }
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        progress={progress}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="images" />
        <AppFormField
          maxLength={255}
          name="title"
          placeholder="Title"
          width={"75%"}
        />
        <AppFormField
          name="price"
          width={"51%"}
          placeholder="Price" /**/
          keyboardType="numeric"
          maxLength={8}
        />
        <AppFormPicker
          PickerItemComponent={CategoryPickerItem}
          numOfColumns={3}
          name="category"
          placeholder="Category"
          items={categories}
          width={"51%"}
        />
        <AppFormField
          name="description"
          placeholder="Description"
          maxLength={255}
          multiline
          numberOfLiner={3}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 25,
    backgroundColor: colors.white,
    justifyContent: "center",
  },
});

export default ListingEditScreen;
