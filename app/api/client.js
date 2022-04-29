import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";

const apiClient = create({ baseURL: "http://192.168.0.105:9000/api" });

// Adding x-auth-token to every response
apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;
apiClient.get = async (path, params, axiosConfig) => {
  const resp = await get(path, params, axiosConfig);

  if (resp.ok) {
    await cache.setStore(path, resp.data);
    return resp;
  }

  const data = await cache.getStoreItem(path);
  return data ? { ok: true, data } : resp;
};

export default apiClient;
