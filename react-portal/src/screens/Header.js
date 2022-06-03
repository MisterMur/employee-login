import React from "react";
import Auth from "../api/Auth";
import { useNavigate } from "react-router-dom";

function Header() {
  const history = useNavigate();
  const logoutHandler = () => {
    console.log("in logout");
    Auth.logout(history); //.then(() => history("/"));
  };

  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <button
          onClick={logoutHandler}
          style={{ zIndex: 1 }}
          className="btn btn-primary btn-lg d-inline-block align-text-top"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
export default Header;
