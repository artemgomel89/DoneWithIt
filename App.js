import { StyleSheet, View } from 'react-native';
import WelcomeScreen from "./app/components/WelcomeScreen/WelcomeScreen";

function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
