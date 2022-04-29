import React from "react";
import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import auth from "../api/auth";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import ErrorMessage from "../components/forms/ErrorMessage";
import useAuth from "../hooks/useAuth";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().max(16).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  const { logIn } = useAuth();
  const api = useApi(auth.register);

  const handleSubmit = async (userInfo) => {
    const resp = await api.request(userInfo);
    if (!resp.ok) return;

    const { data: authToken } = await auth.login(
      userInfo.email,
      userInfo.password
    );
    logIn(authToken);
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
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validationSchema}
        >
          <View>
            <AppFormField
              name="name"
              iconName="account"
              placeholder="Name"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <AppFormField
              name="email"
              iconName="email"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <ErrorMessage visible={api.error} error={api.errorMessage} />
            <AppFormField
              name="password"
              iconName="lock"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry
            />

            <SubmitButton title="Register" />
          </View>
        </AppForm>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 20,
    marginTop: 50,
  },
});

export default RegisterScreen;
