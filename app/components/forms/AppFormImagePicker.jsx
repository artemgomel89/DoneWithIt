import React from "react";

import ImageInputList from "../lists/ImageInputList";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

const AppFormImagePicker = ({ name }) => {
  const { errors, setFieldValue, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((item) => item !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={true} />
    </>
  );
};

export default AppFormImagePicker;
