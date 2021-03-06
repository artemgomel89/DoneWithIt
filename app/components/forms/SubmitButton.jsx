import React from "react";

import AppButton from "../AppButton";
import { useFormikContext } from "formik";

const SubmitButton = ({ title, style }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} style={style} />;
};

export default SubmitButton;
