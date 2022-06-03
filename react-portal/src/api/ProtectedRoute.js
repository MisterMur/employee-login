import React, { useContext } from "react";

import { Navigate } from "react-router-dom";
import AuthContext from "../store/auth-context";

export default function ProtectedRoute({ children }) {
  const ctx = useContext(AuthContext);
  return ctx.isLoggedIn ? children : <Navigate to="/" />;
}
