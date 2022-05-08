import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <span className="logo">{"</sumancoding>"}</span>
        <div className="button">
          <button className="btn">Register</button>
          <button className="btn">Log In</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
