import React from "react";
import "./Card.css";
import { AiFillPlusCircle } from "react-icons/ai";

function Card(props) {
  const {
    image,
    title,
    author,
    amazon,
    rank,
    weeksOnList,
    description,
    color,
  } = props;

  return (
    <div className="book-card" style={{ backgroundColor: color }}>
      <div className="card-img">
        <a href={amazon} target="_blank">
          <img src={image} alt="book" />
        </a>
      </div>
      <div className="book-card-content">
        <div className="title-author">
          <h3>{title}</h3>
          <p>by: {author}</p>
        </div>
        <div className="details">
          <div className="rank-week">
            <p>Current rank: {rank}</p>
            <p>Weeks on list: {weeksOnList}</p>
          </div>
          <p>{description}</p>
        </div>
        <AiFillPlusCircle
          style={{
            position: "absolute",
            bottom: "15px",
            right: "15px",
            fontSize: "40px",
            color: "#e5bab1",
          }}
        />
      </div>
    </div>
  );
}

export default Card;
