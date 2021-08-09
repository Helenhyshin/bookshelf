import React from "react";
import "./Card.css";
import { AiFillPlusCircle } from "react-icons/ai";

function Card(props) {
  const { image, title, author, amazon, rank, weeksOnList } = props;

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
      <a href={amazon} target="_blank">
        <img src={image} alt="book" />
      </a>
      <div className="book-card-content">
        <h2>{title}</h2>
        <p>{author}</p>
        <p>Current rank: {rank}</p>
        <p>Weeks on list: {weeksOnList}</p>
      </div>
    </div>
  );
}

export default Card;
