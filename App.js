import { StyleSheet } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import { useState } from "react";
import LoginScreen from "./app/Screens/LoginScreen";

const categories = [
  { label: "Furniture", id: 1 },
  { label: "Clothes", id: 2 },
  { label: "Bicycles", id: 3 },
];

function App() {
  const [category, setCategory] = useState(categories[0]);
  return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
