import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./MyList.css";

// state needs to be on homepage aka Bestseller, pass down to MyList as props
// parent page needs setToggle useState to determine added or removed from user list
function MyList() {
  const [bookList, setBookList] = useState([
    {
      title: "The Giving Tree",
      image:
        "https://cdn.shopify.com/s/files/1/0173/8676/products/the_giving_tree.jpg?v=1460001835",
      author: "Shel Silverstein",
      genre: "Children",
    },
    {
      title: "Marley and Me",
      image:
        "https://hachette.imgix.net/books/9780733620713.jpg?auto=compress,format",
      author: "John Grogan",
      genre: "Biography",
    },
    {
      title: "The Boy, the Mole, the Fox, and the Horse",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/418D9yYGB3L._SX369_BO1,204,203,200_.jpg",
      author: "Charley Mackesy",
      genre: "Miscellaneous",
    },
  ]);

  //   there is a giant gap between the MyList div and the Bestseller div
  return (
    <div className="my-list">
      <h1>My List</h1>
      <div class="carousel-container">
        <div class="carousel-slide">
          {bookList.map((book) => (
            <Card
              title={book.title}
              image={book.image}
              author={book.author}
              genre={book.genre}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyList;
