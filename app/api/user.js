import apiClient from "./client";
import PATH from "../constants/path";

const getUserData = (id) => apiClient.get(`${PATH.USER}/${id}`);

export default getUserData;
