import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h2>PayMate</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
