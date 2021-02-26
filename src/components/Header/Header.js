import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <img
        className="header-img"
        src={require("../../images/logo.png").default}
        alt=""
      />
      <nav className="navbar">
        <a href="/shop">Shop</a>
        <a href="/order">Order Review</a>
        <a href="/manage">Manage Inventory here</a>
      </nav>
    </div>
  );
};

export default Header;
