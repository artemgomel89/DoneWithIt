import client from "./client";

const register = (token) => client.post("/expoPushTokens", { token });
export default { register };
