import { StyleSheet } from "react-native";

import ListingEditScreen from "./app/Screens/ListingEditScreen";
import LoginScreen from "./app/Screens/LoginScreen";
import RegisterScreen from "./app/Screens/RegisterScreen";
import AccountScreen from "./app/Screens/AccountScreen";

const categories = [
  { label: "Furniture", id: 1 },
  { label: "Clothes", id: 2 },
  { label: "Bicycles", id: 3 },
];

function App() {
  return <AccountScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
