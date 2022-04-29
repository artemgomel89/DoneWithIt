import React, { useState } from "react";
import AuthStorage from "../auth/storage";

const UseRestoreUser = () => {
  const [user, setUser] = useState();

  const restoreUser = async () => {
    const user = await AuthStorage.getUser();
    if (user) setUser(user);
  };

  return { user, setUser, restoreUser };
};

export default UseRestoreUser;
