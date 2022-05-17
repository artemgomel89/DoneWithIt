import * as Notifications from "expo-notifications";
import expoPushTokensApi from "../api/expoPushTokens";

import { useEffect } from "react";
const UseNotifications = (notificationListener) => {
  const registerForPushNotification = async () => {
    try {
      const permission = await Notifications.getPermissionsAsync();
      if (!permission.granted) return;

      const { data: token } = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      expoPushTokensApi.register(token);
    } catch (e) {
      console.log("Error getting a push token", e);
    }
  };

  useEffect(() => {
    registerForPushNotification();

    if (notificationListener)
      Notifications.addNotificationResponseReceivedListener(
        notificationListener
      );
  }, []);
};

export default UseNotifications;
