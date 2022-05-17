import React from "react";
import { View } from "react-native";

import AppTextInput from "../AppText/AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

const AppFormField = ({ name, width = "100%", ...otherProps }) => {
  const { setFieldTouched, errors, touched, setFieldValue, values } =
    useFormikContext();
  return (
    <View>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};

export default AppFormField;
