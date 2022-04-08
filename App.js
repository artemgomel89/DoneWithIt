import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingEditScreen from "./app/Screens/ListingEditScreen";

const Tweets = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tweets</Text>
    </View>
  );
};

const TweetDetails = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tweet Details</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen name="TweetDetails" component={TweetDetails} />
    </Stack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <ListingEditScreen />
    </NavigationContainer>
  );
}

export default App;
