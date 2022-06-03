import React from "react";
import Auth from "./Auth";

import { Navigate } from "react-router-dom";
import AuthContext from "../store/auth-context";

export default function ProtectedRoute({ children }) {
  // const auth = Auth.isUserLoggedIn();
  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return ctx.isLoggedIn ? children : <Navigate to="/" />;
      }}
    </AuthContext.Consumer>
  );
}
