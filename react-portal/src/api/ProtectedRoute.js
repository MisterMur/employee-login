import React from "react";

import { Navigate } from "react-router-dom";
import AuthContext from "../store/auth-context";

export default function ProtectedRoute({ children }) {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return ctx.isLoggedIn ? children : <Navigate to="/" />;
      }}
    </AuthContext.Consumer>
  );
}
