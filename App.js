import { StyleSheet } from "react-native";
import MessagesScreen from "./app/Screens/MesssagesScreen";
import RegisterScreen from "./app/Screens/RegisterScreen";

const categories = [
  { label: "Furniture", id: 1 },
  { label: "Clothes", id: 2 },
  { label: "Bicycles", id: 3 },
];

function App() {
  return <RegisterScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
