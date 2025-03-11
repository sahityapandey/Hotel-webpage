import React from "react";
import '../styles/Navbar.css';
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/about'>Services</NavLink></li>
        <li><NavLink to='/about'>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;