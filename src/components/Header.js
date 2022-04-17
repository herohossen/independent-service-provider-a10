import "../Styles/Header.css";

import React from "react";
import { NavLink } from "react-router-dom";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <div>
      <div className="nav">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/checkout"
        >
          Checkout
        </NavLink>
        {user ? 
        <button onClick={()=>signOut(auth)}>Sign Out</button>
        :
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/Signin"
          >
            SignIn
          </NavLink>
        }
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/signup"
        >
           SignUp
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
