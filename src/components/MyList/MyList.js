import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./MyList.css";

function MyList() {
  const [bookList, setBookList] = useState([
    {
      title: "The Giving Tree",
      book_image:
        "https://cdn.shopify.com/s/files/1/0173/8676/products/the_giving_tree.jpg?v=1460001835",
      author: "Shel Silverstein",
      genre: "Children",
    },
    {
      title: "Marley and Me",
      book_image:
        "https://hachette.imgix.net/books/9780733620713.jpg?auto=compress,format",
      author: "John Grogan",
      genre: "Biography",
    },
    {
      title: "The Boy, the Mole, the Fox, and the Horse",
      book_image:
        "https://images-na.ssl-images-amazon.com/images/I/418D9yYGB3L._SX369_BO1,204,203,200_.jpg",
      author: "Charley Mackesy",
      genre: "Miscellaneous",
    },
    {
      title: "The Giving Tree",
      book_image:
        "https://cdn.shopify.com/s/files/1/0173/8676/products/the_giving_tree.jpg?v=1460001835",
      author: "Shel Silverstein",
      genre: "Children",
    },
    {
      title: "Marley and Me",
      book_image:
        "https://hachette.imgix.net/books/9780733620713.jpg?auto=compress,format",
      author: "John Grogan",
      genre: "Biography",
    },
    {
      title: "The Boy, the Mole, the Fox, and the Horse",
      book_image:
        "https://images-na.ssl-images-amazon.com/images/I/418D9yYGB3L._SX369_BO1,204,203,200_.jpg",
      author: "Charley Mackesy",
      genre: "Miscellaneous",
    },
  ]);

  return (
    <div className="my-list">
      <div className="carousel-container">
        <div className="carousel-slide">
          {bookList.map((book) => (
            <Card
              title={book.title}
              image={book.book_image}
              author={book.author}
              amazon={book.amazon_product_url}
              rank={book.rank}
              weeksOnList={book.weeks_on_list}
              description={book.description}
              color={book.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyList;
