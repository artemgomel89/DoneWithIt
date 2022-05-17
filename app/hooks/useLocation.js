import { useEffect, useState } from "react";
import * as Location from "expo-location";
import Alert from "react-native/Libraries/Alert/Alert";

const useLocation = () => {
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted)
      Alert.alert("You have to enable permission to your location!", "ok");
    if (granted) {
      let lastKnownPosition = await Location.getLastKnownPositionAsync();
      console.log("got it!");
      if (!lastKnownPosition) {
        lastKnownPosition = await Location.getCurrentPositionAsync();
      }
      const { latitude, longitude } = lastKnownPosition.coords;
      setLocation({ latitude, longitude });
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useLocation;
