import React from "react";
import { Image, StyleSheet, View } from "react-native";

import * as Yup from "yup";

import UseApi from "../../hooks/useApi";
import Auth from "../../api/auth";
import useAuth from "../../hooks/useAuth";

import Screen from "../../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../../components/forms";
import ActivityIndicator from "../../components/network/ActivityIndicator";

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
      <Screen
        style={styles.container}
        barBgColor="transparent"
        translucent={true}
      >
        <Image
          source={require("../../assets/logo-red.png")}
          style={styles.image}
        />
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validationSchema}
        >
          <View style={styles.fieldsContainer}>
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
              style={styles.inputStyle}
            />
            <ErrorMessage error={errorMessage} visible={error} />
            <SubmitButton title="Log in" style={styles.button} />
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
  button: { width: "80%" },
  image: {
    width: 80,
    height: 80,
    marginBottom: 20,
    marginTop: 50,
  },
  fieldsContainer: {
    width: "90%",
  },
});

export default LoginScreen;
