import React, { useContext } from "react";

import { Navigate } from "react-router-dom";
import AuthContext from "../store/auth-context";

export function ProtectedRoute({ children }) {
  const ctx = useContext(AuthContext);
  return ctx.isLoggedIn ? children : <Navigate to="/" />;
}

export function LoginRoute({ children }) {
  const ctx = useContext(AuthContext);
  return ctx.isLoggedIn ?  <Navigate to="/employees" />:children;
}