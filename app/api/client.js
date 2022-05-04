import { create } from "apisauce";

import cache from "../utility/cache";
import authStorage from "../auth/storage";
import PATH from "../constants/path";

const apiClient = create({ baseURL: PATH.BASE_URL });

// Adding x-auth-token to every request
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
