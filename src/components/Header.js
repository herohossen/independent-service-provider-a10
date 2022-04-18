import "../Styles/Header.css";
import React from "react";
import { NavLink } from "react-router-dom";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <div className="nav-container">
      <div className="logo">
        Delowar</div>
      <div className="mmmm">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "link"
              }
              to="/home"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/checkout"
            >
              Checkout
            </NavLink>
          </li>
          <li>
            {user ? (
              <button onClick={() => signOut(auth)}>Sign Out</button>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to="/Signin"
              >
                SignIn
              </NavLink>
            )}
            {/* <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/signup"
            >
              SignUp
            </NavLink> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
