import { useState } from "react";

const useApi = (apiFunc) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const resp = await apiFunc(...args);
    setLoading(false);

    setError(!resp.ok);
    if (!resp.ok) {
      resp.data
        ? setErrorMessage(resp.data.error)
        : setErrorMessage("Unexpected error occurred");
    }

    return resp;
  };

  return { error, errorMessage, loading, request };
};

export default useApi;
