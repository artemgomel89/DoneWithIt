import { useState } from "react";

import useAuth from "./useAuth";
import Auth from "../api/auth";

const useLogin = () => {
  const { logIn } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const logInUser = async (email, password) => {
    setLoading(true);

    // Запрос возвращает объект с данными пользователя
    const resp = await Auth.login(email, password);
    setLoading(false);

    setError(!resp.ok);

    if (!resp.ok) {
      resp.data
        ? setErrorMessage(resp.data.error)
        : setErrorMessage("Unexpected error occurred");
    } else {
      logIn(resp.data);
    }
    return resp;
  };
  return { logInUser, errorMessage, error, loading };
};

export default useLogin;
