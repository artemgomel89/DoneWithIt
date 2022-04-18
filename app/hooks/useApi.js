import { useState } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const resp = await apiFunc(...args);
    setLoading(false);

    if (!resp.ok) return setError(true);

    setError(false);
    setData(resp.data.reverse());
  };
  return { data, error, loading, request };
};

export default useApi;
