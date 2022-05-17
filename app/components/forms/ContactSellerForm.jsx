import React from "react";
import { StyleSheet, Alert, View } from "react-native";

import messageApi from "../../api/messages";

import * as Yup from "yup";
import * as Notifications from "expo-notifications";

import AppForm from "./AppForm";
import { AppFormField, SubmitButton } from "./index";

const ContactSellerForm = ({ listing, userId }) => {
  const handleSubmit = async ({ message }, { resetForm }) => {
    const result = await messageApi.send(message, listing.userId);
    if (!result.ok) return Alert.alert("Couldn't send the message");

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

  return userId !== listing.userId ? (
    <View style={styles.container}>
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
          style={styles.input}
        />
        <SubmitButton title="Contact Seller" style={styles.button} />
      </AppForm>
    </View>
  ) : null;
};

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

const styles = StyleSheet.create({
  container: {
    width: "70%",
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    width: "100%",
    paddingHorizontal: 45,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "100%",
  },
});

export default ContactSellerForm;
