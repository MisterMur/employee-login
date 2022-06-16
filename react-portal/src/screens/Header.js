import React, { useContext } from "react";
import Auth from "../api/Auth";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";

function Header() {
  const history = useNavigate();
  const ctx = useContext(AuthContext);
  const logoutHandler = () => {
    ctx.onLogout(history);
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
