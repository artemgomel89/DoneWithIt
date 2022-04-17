import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (granted) {
      const lastKnownPosition = await Location.getLastKnownPositionAsync();
      if (!lastKnownPosition) return;
      const { latitude, longitude } = lastKnownPosition.coords;
      setLocation({ latitude, longitude });
    }
  };

  useEffect(() => {
    getLocation().then((r) => console.log(r));
  }, []);

  return location;
};

export default useLocation;
