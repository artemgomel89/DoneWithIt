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
import ViewImageScreen from "./app/Screens/ViewImageScreen";
import SwipeGesture from "./app/components/SwipeGesture";

function App() {
  return (
    <View style={styles.container}>
      <MessagesScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
