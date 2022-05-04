import client from "./client";
import PATH from "../constants/path";

const loginRequest = (email, password) =>
  client.post(PATH.AUTH, { email, password });
const registerRequest = (userInfo) => client.post(PATH.USERS, userInfo);

export default { loginRequest, registerRequest };
