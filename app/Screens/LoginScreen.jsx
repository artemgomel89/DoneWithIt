import React from "react";
import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import auth from "../api/auth";
import useAuth from "../hooks/useAuth";
import useApi from "../hooks/useApi";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const { logIn } = useAuth();
  const api = useApi(auth.login);

  const handleSubmit = async ({ email, password }) => {
    const resp = await api.request(email, password);

    if (!resp.ok) return;

    logIn(resp.data);
  };

  return (
    <>
      <ActivityIndicator visible={api.loading} />
      <Screen style={styles.container}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.image}
        />
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validationSchema}
        >
          <View style={{ width: "100%" }}>
            <AppFormField
              name="email"
              iconName="email"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <AppFormField
              name="password"
              iconName="lock"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="password"
              secureTextEntry
            />
            <ErrorMessage error={api.errorMessage} visible={api.error} />
            <SubmitButton title="Login" />
          </View>
        </AppForm>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 20,
    marginTop: 50,
  },
});

export default LoginScreen;
