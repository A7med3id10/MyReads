import "./App.css";
import { useState, useEffect } from "react";
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
      //console.log(books);
    });
  }, []);

  const handelUpdate = async (book, event) => {
    BooksAPI.update(book, event.target.value);
    //console.log(books);
    //console.log(book.shelf);
    if (books.filter((b) => b.id === book.id).length > 0) {
      setBooks(
        books.map((el) =>
          el.title === book.title ? { ...el, shelf: event.target.value } : el
        )
      );
    } else {
      //console.log(book);
      setBooks(books.concat({ ...book, shelf: event.target.value }));
    }
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<MainPage books={books} updateShelf={handelUpdate} />}
      />
      <Route
        path="/search"
        element={<SearchPage books={books} updateShelf={handelUpdate} />}
      />
    </Routes>
  );
}

export default App;
