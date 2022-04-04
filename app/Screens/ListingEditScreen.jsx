import React from "react";
import * as Yup from "yup";
import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    id: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    id: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    id: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    id: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    id: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    id: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    id: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    id: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    id: 9,
  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).max(25).label("Title"),
  price: Yup.number().required().max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          name="price"
          width={120}
          placeholder="Price"
          keyboardType="numeric"
          maxLength={8}
        />
        <AppFormPicker
          PickerItemComponent={CategoryPickerItem}
          numOfColumns={3}
          name="category"
          placeholder="Category"
          items={categories}
          width={"50%"}
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
    padding: 20,
  },
});

export default ListingEditScreen;
