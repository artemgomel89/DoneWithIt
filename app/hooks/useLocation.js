import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [userLocation, setUserLocation] = useState();

  const getLocation = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync().then(
      (r) => console.log(r)
    );
    if (!granted) return;
    const {
      coords: { latitude, longitude },
    } = await Location.getLastKnownPositionAsync();
    console.log({ latitude, longitude });
    setUserLocation({ latitude, longitude });
  };
  useEffect(() => {
    getLocation().then((r) => console.log(r));
  }, []);

  return userLocation;
};

export default useLocation;
