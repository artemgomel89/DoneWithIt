import { useEffect, useState } from "react";
import { StyleSheet, Image, View, FlatList } from "react-native";
import colors from "./app/config/colors";
import ImageInput from "./app/components/ImageInput";
import Screen from "./app/components/Screen";
import ImageInputList from "./app/components/lists/ImageInputList";

function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((item) => item !== uri));
  };

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
}

export default App;
