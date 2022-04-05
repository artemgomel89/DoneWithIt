import * as ImagePicker from "expo-image-picker";
import Screen from "./Screen";
import AppButton from "./AppButton";
import { Image } from "react-native";
import { useEffect } from "react";

const [imageUri, setImageUri] = useState();

const requestPermission = async () => {
  const { granted } = await ImagePicker.requestCameraPermissionsAsync();
  if (!granted) alert("You need to enable permission to access the library");
};

useEffect(() => {
  requestPermission().then((r) => console.log(r));
}, []);

const selectImage = async () => {
  try {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) setImageUri(result.uri);
  } catch (e) {
    console.log(`Error reading an image ${e}`);
  }
};

return (
  <Screen>
    <AppButton title="Select Image" onPress={selectImage} />
    <Image source={{ uri: imageUri }} style={{ width: 100, height: 100 }} />
  </Screen>
);
