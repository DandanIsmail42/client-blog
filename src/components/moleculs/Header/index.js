import React from "react";
import "./header.scss";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <Link className="logo-app" to="/">
        MERN Blog
      </Link>
      <p className="menu-item" onClick={() => navigate("/login")}>
        Logout
      </p>
    </div>
  );
};

export default Header;
