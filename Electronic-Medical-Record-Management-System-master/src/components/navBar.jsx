import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-4 logo justify-content-between">
      <div className="navbar-brand" to="/">
        <img alt="icon" height={40} src={require("../assets/1.png")} />
        <span className="px-1 logo-size">Medicare</span>
      </div>
      <div className="navbar-nav">
        {user && (
          <React.Fragment>
            <NavLink className="nav-item nav-link mx-4" to="/patients">
              Patients DashBoard
            </NavLink>
            {user.isAdmin === 1 && (
              <NavLink className="nav-item nav-link mx-4" to="/doctors">
                Doctors Management
              </NavLink>
            )}
            <div className="nav-item nav-link mx-4">Hello, {user.name}</div>
            <NavLink className="nav-item nav-link mx-4" to="/logout">
              Log Out
            </NavLink>
          </React.Fragment>
        )}
        {!user && (
          <NavLink className="nav-item nav-link mx-4" to="/login">
            Log In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
