import { useContext } from "react";
import AuthContext from "../auth/context";
import AuthStorage from "../auth/storage";
import jwtDecode from "jwt-decode";

export default () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (token) => {
    const userData = jwtDecode(token);
    setUser(userData);
    AuthStorage.saveToken(token);
  };

  const logOut = () => {
    setUser(null);
    AuthStorage.removeToken();
  };
  return { user, logOut, logIn };
};
