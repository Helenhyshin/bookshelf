import React, { useState } from "react";
import Card from "../components/Card/Card.js";

const BestsellerPage = () => {
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
    {
      title: "Harry Potter and the Sorcerer's Stone",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg",
      author: "J.K. Rowling",
      genre: "Fantasy",
    },
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
    {
      title: "Harry Potter and the Sorcerer's Stone",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg",
      author: "J.K. Rowling",
      genre: "Fantasy",
    },
  ]);

  return (
    <>
      {bookList.map((book) => (
        <Card
          title={book.title}
          image={book.image}
          author={book.author}
          genre={book.genre}
        />
      ))}
    </>
  );
};

export default BestsellerPage;
