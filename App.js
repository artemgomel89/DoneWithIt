import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
} from "react-native";
import MessagesScreen from "./app/Screens/MesssagesScreen";
import colors from "./app/colors";
import WelcomeScreen from "./app/Screens/WelcomeScreen";
import Screen from "./app/components/Screen";

function App() {
  return (
    <View>
      <MessagesScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
