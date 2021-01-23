import React, { useState, useEffect, useContext } from "react";
import AppBar from "./AppBar";
// import BookList from "./BookList";
import { CartContext } from "../appContext";
import Request from "./request";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [lists, setLists] = useState([]);
  const [bookName, setBookName] = useState("");
  const handleForm = async (e) => {
    e.preventDefault();
    const allBooks = JSON.parse(localStorage.getItem("books"));
    const bookList = [];
    await allBooks.map((book) => {
      let name = "";
      name = book.title;
      const res = name.search(bookName);
      if (res > 0) {
        return bookList.push(book);
      }
    });
    setLists(bookList);
    console.log(lists);
  };
  useEffect(() => {
    setBooks(JSON.parse(localStorage.getItem("books")));
  }, []);
  return (
    <div>
      <AppBar change={(e) => setBookName(e.target.value)} submit={handleForm} />
      {books &&
        books.map((book, index) => {
          return (
            <BookCard
              key={index}
              id={book.bookID}
              title={book.title}
              author={book.authors}
              price={book.price}
              lang={book.language_code}
              rating={book.average_rating}
              isbn={book.isbn}
            />
          );
        })}
      {lists &&
        lists.map((book, index) => {
          return (
            <BookCard
              key={index}
              id={book.bookID}
              title={book.title}
              author={book.authors}
              price={book.price}
              lang={book.language_code}
              rating={book.average_rating}
              isbn={book.isbn}
            />
          );
        })}
    </div>
  );
};

export default Home;

const BookCard = (props) => {
  const { cart, setCart } = useContext(CartContext);
  const num = props.rating.toString();
  const star = parseInt(num.slice(0, 1));
  const { id, title, author, price, lang } = props;
  const AddToCart = (e) => {
    e.preventDefault();
    setCart([...cart, { id, title, author, price, lang }]);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div className="card" key={props.index} id={props.id}>
      <h3 className="title">{props.title}</h3>
      <h4 className="author">
        <span className="span">By: </span> {props.author}
      </h4>
      <div className="row">
        <h5 className="price">
          <span className="span">Price:</span> ${props.price}
        </h5>
        <h5 className="lang">
          <span className="span">Language:</span> {props.lang}
        </h5>
      </div>
      <div className="row">
        <div className="rating">
          <span className="span">
            Rating:
            <span className={`fa fa-star ${star >= 1 ? "checked" : ""}`}></span>
            <span
              className={`fa fa-star ${star >= 2 ? "checked" : ""} `}
            ></span>
            <span
              className={`fa fa-star ${star >= 3 ? "checked" : ""} `}
            ></span>
            <span className={`fa fa-star ${star >= 4 ? "checked" : ""}`}></span>
            <span className={`fa fa-star ${star >= 5 ? "checked" : ""}`}></span>
          </span>
        </div>
        <h5 className="isbn">
          <span className="span">ISBN:</span> {props.isbn}
        </h5>
      </div>
      <button onClick={AddToCart} className="btn">
        Add To Cart
      </button>
    </div>
  );
};
