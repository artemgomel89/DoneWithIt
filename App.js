import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppContext from "./app/auth/context";
import AuthStorage from "./app/auth/storage";

import OfflineNotification from "./app/components/network/OfflineNotification";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppLoading from "expo-app-loading";

import { navigationRef } from "./app/navigation/rootNavigation";
import navigationTheme from "./app/navigation/NavigationTheme";

function App() {
  const [user, setUser] = useState();
  const [listings, setListings] = useState([]);
  const [appIsReady, setAppIsReady] = useState(false);
  const [categoriesToFilter, setCategoriesToFilter] = useState([]);
  const [messages, setMessages] = useState();

  const restoreUser = async () => {
    const user = await AuthStorage.getUser();
    if (user) setUser(user);
  };

  return appIsReady ? (
    <AppContext.Provider
      value={{
        user,
        setUser,
        messages,
        setMessages,
        listings,
        setListings,
        categoriesToFilter,
        setCategoriesToFilter,
      }}
    >
      <OfflineNotification />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AppContext.Provider>
  ) : (
    <AppLoading
      startAsync={restoreUser}
      onFinish={() => setAppIsReady(true)}
      onError={console.warn}
    />
  );
}

export default App;
