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
        Delowar Hossen
        Your Virtual teacher
      </div>
      <div className="mmmm">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/home"
            >
              Home
            </NavLink>
          </li>

          {/* <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/checkout"
            >
              Checkout
            </NavLink>
          </li> */}
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            {user ? (
              <button className="btn btn-warning" onClick={() => signOut(auth)}>
                Sign Out
              </button>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to="/signin"
              >
                SignIn
              </NavLink>
            )}
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/signup"
            >
              SignUp
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
