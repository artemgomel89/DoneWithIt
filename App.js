import { StyleSheet } from "react-native";
import ListingEditScreen from "./app/Screens/ListingEditScreen";

const categories = [
  { label: "Furniture", id: 1 },
  { label: "Clothes", id: 2 },
  { label: "Bicycles", id: 3 },
];

function App() {
  return <ListingEditScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
