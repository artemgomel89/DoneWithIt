import * as Notifications from "expo-notifications";
import registerPushToken from "../api/expoPushTokens";
import { useEffect } from "react";
const UseNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotification();

    if (notificationListener)
      Notifications.addNotificationResponseReceivedListener(
        notificationListener
      );
  }, []);

  const registerForPushNotification = async () => {
    const permission = await Notifications.getPermissionsAsync();
    if (!permission.granted) return;

    try {
      const { data: token } = await Notifications.getExpoPushTokenAsync();
      registerPushToken(token);
    } catch (e) {
      console.log("Error getting a push token", e);
    }
  };
};

export default UseNotifications;
