import "../Styles/Header.css";

import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
           <div className="nav">
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/home">Home</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/Signin">SignIn</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/signup">SignUp</NavLink>
        </div>
    </div>
  );
};

export default Header;
