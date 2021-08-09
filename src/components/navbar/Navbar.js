import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "./Navbar.css";
import { BsBook } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="sticky" className="navbar" color="black">
      <Toolbar>
        <Link to="/" className="nav-links">
          <BsBook />
        </Link>
        <Link to="/profile" className="nav-links">
          My Page
        </Link>
        <Link to="/bestseller" className="nav-links">
          Bestseller Page
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
