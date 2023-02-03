import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import Auth from "../api/Auth";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    console.log(`in authsuccess useeffect`);
    if (Auth.isUserLoggedIn()) {
      setIsLoggedIn(true);

    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const logoutHandler = (history) => {
    Auth.logout(history);
    setIsLoggedIn(false);
    history("/");
  };
  
  const loginHandler =  async ({loginData, history,registerData}) => {

    const result = registerData ? await Auth.create(registerData) : await Auth.login(loginData);
    console.log(result);

    if(result){
      setIsLoggedIn(true);
      history('/employees')
    }
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
