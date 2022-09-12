import React from "react";
import {NavLink} from "react-router-dom";
import "../../Styles/Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <p>Jack Of Thoughts</p>
      </div>
      <div className="nav-actions">
        <NavLink to="/">Home</NavLink>
        <a href="#blog">Blogs</a>
        <button>Lets talk</button>
      </div>
    </div>
  );
}

export default Navbar;
