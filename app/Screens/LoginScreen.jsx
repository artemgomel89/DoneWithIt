import React from "react";
import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import ActivityIndicator from "../components/ActivityIndicator";
import UseApi from "../hooks/useApi";
import Auth from "../api/auth";
import useAuth from "../hooks/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const { request, loading, error, errorMessage } = UseApi(Auth.loginRequest);
  const { logIn } = useAuth();

  const handleSubmit = async ({ email, password }) => {
    const resp = await request(email, password);
    if (!resp.ok) return;
    logIn(resp.data);
  };

  return (
    <>
      <ActivityIndicator visible={loading} />
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
            <ErrorMessage error={errorMessage} visible={error} />
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
