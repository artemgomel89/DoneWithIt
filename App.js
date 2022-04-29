import * as React from "react";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthContext from "./app/auth/context";
import AuthStorage from "./app/auth/storage";

import AppLoading from "expo-app-loading";

import navigationTheme from "./app/navigation/NavigationTheme";
import OfflineNotification from "./app/components/OfflineNotification";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { navigationRef } from "./app/navigation/rootNavigation";

function App() {
  const [user, setUser] = useState();
  const [appIsReady, setAppIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await AuthStorage.getUser();
    if (user) setUser(user);
  };

  return appIsReady ? (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotification />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  ) : (
    <AppLoading
      startAsync={restoreUser}
      onFinish={() => setAppIsReady(true)}
      onError={console.warn}
    />
  );
}

export default App;
