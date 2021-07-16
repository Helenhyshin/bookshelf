import React from "react";
import Cards from "../cards/Cards";

function Bestseller() {
  const bookList = [
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
  ];

  return <Cards bookList={bookList} />;
}

export default Bestseller;
