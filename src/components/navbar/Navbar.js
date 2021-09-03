import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "./Navbar.css";
import { BsBook } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="sticky" className="navbar" color="black">
      <Toolbar className="toolbar">
        <div className="links">
          <Link to="/profile" className="nav-links-my-page">
            My Shelf
          </Link>
          <Link to="/bestseller" className="nav-links-bestseller">
            Bestsellers
          </Link>
        </div>

        <div class="header-title">bookshelf</div>

        <div className="book">
          <Link to="/" className="book-icon">
            <BsBook />
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
