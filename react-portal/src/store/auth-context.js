import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Auth from "../api/Auth";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (Auth.isUserLoggedIn()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  const history = useNavigate();

  const logoutHandler = (history) => {
    Auth.logout(history);
    setIsLoggedIn(false);
    history("/");
  };
  const loginHandler = (loginData, history) => {
    Auth.login(loginData, history);
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
