import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="sticky" className="navbar" color="black">
      <Toolbar>
        <Typography variant="h6">Welcome to Bookshelf!</Typography>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/MyPage">My Page</Link>
        <Link to="/BestsellerPage">Bestseller Page</Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
