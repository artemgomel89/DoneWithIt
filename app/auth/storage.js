import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const KEY = "token";

const saveToken = async (token) => {
  try {
    await SecureStore.setItemAsync(KEY, token);
  } catch (e) {
    console.log(`Error setting the auth token: ____ ${e}`);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(KEY);
  } catch (e) {
    console.log(`Error getting the auth token: ____ ${e}`);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(KEY);
  } catch (e) {
    console.log(`Error deleting the auth token: ____ ${e}`);
  }
};

export default { saveToken, removeToken, getUser, getToken };
