import client from "./client";

const registerPushToken = (token) => client.post("/expoPushTokens", { token });
export default registerPushToken;
