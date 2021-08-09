import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Bestseller.css";
import {
  fetchHCFictionBestseller,
  fetchHCNonfictionBestseller,
  fetchPictureBestseller,
} from "../../api/NYTimesClient.js";

function Bestseller() {
  useEffect(() => {
    // setBookList(fetchNYTimesBestseller)
    fetchHCFictionBestseller().then((res) =>
      setFictionBookList(res.results.books)
    );

    fetchHCNonfictionBestseller().then((res) =>
      setNonFictionBookList(res.results.books)
    );

    fetchPictureBestseller().then((res) =>
      setPictureBookList(res.results.books)
    );
  }, []);

  const [fictionBookList, setFictionBookList] = useState([]);
  const [nonFictionBookList, setNonFictionBookList] = useState([]);
  const [pictureBookList, setPictureBookList] = useState([]);

  return (
    <div className="nyt-bestseller">
      <h1>NYTimes Hardcover Fiction Bestseller</h1>
      <div class="carousel-container">
        <div class="carousel-slide">
          {fictionBookList.map((book) => (
            <Card
              title={book.title}
              image={book.book_image}
              author={book.author}
              amazon={book.amazon_product_url}
              rank={book.rank}
              weeksOnList={book.weeks_on_list}
            />
          ))}
        </div>
      </div>
      <h1>NYTimes Hardcover Non-Fiction Bestseller</h1>
      <div class="carousel-container">
        <div class="carousel-slide">
          {nonFictionBookList.map((book) => (
            <Card
              title={book.title}
              image={book.book_image}
              author={book.author}
              amazon={book.amazon_product_url}
              rank={book.rank}
              weeksOnList={book.weeks_on_list}
            />
          ))}
        </div>
      </div>
      <h1>NYTimes Chilren's Picture Bestseller</h1>
      <div class="carousel-container">
        <div class="carousel-slide">
          {pictureBookList.map((book) => (
            <Card
              title={book.title}
              image={book.book_image}
              author={book.author}
              amazon={book.amazon_product_url}
              rank={book.rank}
              weeksOnList={book.weeks_on_list}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bestseller;

// {status: "OK", copyright: "Copyright (c) 2021 The New York Times Company.  All Rights Reserved.", num_results: 15, last_modified: "2021-08-04T22:23:25-04:00", results: {…}}
// copyright: "Copyright (c) 2021 The New York Times Company.  All Rights Reserved."
// last_modified: "2021-08-04T22:23:25-04:00"
// num_results: 15
// results:
// bestsellers_date: "2021-07-31"
// books: Array(15)
// 0:
// age_group: ""
// amazon_product_url: "https://www.amazon.com/dp/1501171348?tag=NYTBSREV-20"
// article_chapter_link: ""
// asterisk: 0
// author: "Laura Dave"
// book_image: "https://storage.googleapis.com/du-prd/books/images/9781501171345.jpg"
// book_image_height: 500
// book_image_width: 331
// book_review_link: ""
// book_uri: "nyt://book/b38ae769-e873-5272-bb5a-c58a35162db1"
// buy_links: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// contributor: "by Laura Dave"
// contributor_note: ""
// dagger: 0
// description: "Hannah Hall discovers truths about her missing husband and bonds with his daughter from a previous relationship."
// first_chapter_link: ""
// isbns: (3) [{…}, {…}, {…}]
// price: "0.00"
// primary_isbn10: "1501171348"
// primary_isbn13: "9781501171345"
// publisher: "Simon & Schuster"
// rank: 1
// rank_last_week: 2
// sunday_review_link: ""
// title: "THE LAST THING HE TOLD ME"
// weeks_on_list: 13
// [[Prototype]]: Object

{
  /* <a href="amazon.com"><img src='whatever' /></a> */
}
