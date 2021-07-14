import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Cards.css";

function Cards(props) {
  console.log(props);
  return (
    <>
      {props.bookList.map((book) => (
        <Card className="card">
          <CardHeader title="The Giving Tree" />
          <CardMedia
            className="card-img"
            component="img"
            alt="Tree"
            height="300"
            image={book.image}
            title="The Giving Tree"
          />
          <CardContent className="card-content">
            <Typography variant="body2" color="textSecondary" component="p">
              Author: {book.author}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Genre: {book.genre}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default Cards;
