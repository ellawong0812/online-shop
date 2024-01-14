import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="navbar">
      <nav className="navbar_nav">
        <ul className="navbar_menu">
          <li className="navbar_item">
            <NavLink to="/" className="navbar_link">
              Home Page🐻
            </NavLink>
          </li>
          <li className="navbar_item">
            <NavLink to="/products" className="navbar_link">
              Products✨
            </NavLink>
          </li>
          <li className="navbar_item">
            <NavLink to="/cart" className="navbar_link">
              Cart🛒
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
