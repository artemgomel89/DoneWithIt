import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefix = "cache";
const expiryMinutes = 5;

const setStore = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (e) {
    console.log(e);
  }
};

const isExpired = (item, lifetimeMinutes) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, "minutes") > lifetimeMinutes;
};

const getStoreItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item, expiryMinutes)) {
      // Command Query Separations (CQS)

      await AsyncStorage.removeItem(prefix + key);
      return null;
    }
    return item.value;
  } catch (e) {
    console.log(e);
  }
};

export default { setStore, getStoreItem };
