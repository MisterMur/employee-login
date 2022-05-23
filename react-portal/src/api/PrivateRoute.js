import React, { Component } from "react";
import Auth from "./Auth";

import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const auth = Auth.isUserLoggedIn();
  return auth ? children : <Navigate to="/" />;
}
