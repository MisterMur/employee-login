import React, { Component } from "react";
import { Navigate, Route } from "react-router-dom";
import Auth from "./Auth";

class AuthenticatedRoute extends Component {
  render() {
    Auth.validateJWTToken();
    if (Auth.isUserLoggedIn()) {
      return <Route {...this.props} />;
    } else {
      return <Navigate to="/" />;
    }
  }
}
export default AuthenticatedRoute;
