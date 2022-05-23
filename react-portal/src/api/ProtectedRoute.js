import React from "react";
import Auth from "./Auth";

import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const auth = Auth.isUserLoggedIn();
  return auth ? children : <Navigate to="/" />;
}
