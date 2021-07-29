import React, { useState } from "react";
import "./Title.css";

function Title() {
  return (
    <div className="title">
      <form className="title-form">
        <input placeholder="search by title, author, or genre" />
        <button>Search</button>
      </form>
    </div>
  );
}

export default Title;
