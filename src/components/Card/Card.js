import React from "react";
import "./Card.css";
import { AiFillPlusCircle } from "react-icons/ai";

function Card(props) {
  const { image, title, author, genre } = props;

  return (
    <div className="book-card">
      <AiFillPlusCircle
        style={{
          position: "absolute",
          bottom: "5px",
          right: "5px",
          fontSize: "40px",
        }}
      />
      <img src={image} alt="" />
      <div className="book-card-content">
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{genre}</p>
      </div>
    </div>
  );
}

export default Card;
