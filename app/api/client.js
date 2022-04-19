import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({ baseURL: "http://192.168.100.3:9000/api" });

const get = apiClient.get;
apiClient.get = async (path, params, axiosConfig) => {
  const resp = await get(path, params, axiosConfig);

  if (resp.ok) {
    await cache.setStore(path, resp.data);
    return resp;
  } else {
  }

  const data = await cache.getStoreItem(path);
  return data ? { ok: true, data } : resp;
};

export default apiClient;
