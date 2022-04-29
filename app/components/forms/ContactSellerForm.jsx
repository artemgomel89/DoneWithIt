import React from "react";

import messageApi from "../../api/messages";
import { StyleSheet, Keyboard, Alert } from "react-native";
import * as Notifications from "expo-notifications";
import * as Yup from "yup";
import AppForm from "./AppForm";
import { AppFormField, SubmitButton } from "./index";

const ContactSellerForm = ({ listing }) => {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messageApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error123213431", result);
      return Alert.alert("Error", "Couldn't send message to the user");
    }
    resetForm();

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Success!",
        body: "You sent a notification",
      },
      trigger: {
        seconds: 1,
      },
    });
  };

  return (
    <AppForm
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormField
        maxLength={255}
        multiline
        name="message"
        numberOfLines={3}
        placeholder="Message..."
      />
      <SubmitButton title="Contact Seller" />
    </AppForm>
  );
};

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ContactSellerForm;
