import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View, Image,
} from "react-native";
import MessagesScreen from "./app/Screens/MesssagesScreen";
import colors from "./app/colors";
import WelcomeScreen from "./app/Screens/WelcomeScreen";
import Screen from "./app/components/Screen";
import ViewImageScreen from "./app/Screens/ViewImageScreen";
import SwipeGesture from "./app/components/SwipeGesture";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";

function App() {
  return (
    <Screen>
      <ListItem title="Title" subTitle="subTitle" IconComponent={<Icon name="email" size={60}/>}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
