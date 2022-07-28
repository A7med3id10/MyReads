import { useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

const SearchPage = ({ updateShelf, books }) => {
  const [query, setQuery] = useState("");
  const [displayBooks, setDisplayBooks] = useState([]);
  const updateQuery = async (query) => {
    setQuery(query);
    //console.log(query);
    //console.log(displayBooks);
    await BooksAPI.search(query).then((resBooks) => {
      if (Array.isArray(resBooks)) {
        resBooks.forEach((book) => {
          books.forEach((bk) => {
            //book is in main page
            if (book.id === bk.id) {
              book.shelf = bk.shelf;
            }
          });
        });
        setDisplayBooks(
          resBooks.filter(
            (book) =>
              book.authors !== undefined && book.imageLinks !== undefined
          )
        );
      } else {
        setDisplayBooks([]);
      }
    });
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {query &&
            displayBooks.map((b) => {
              return (
                <li key={b.id}>
                  <Book b={b} updateShelf={(e) => updateShelf(b, e)} />
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
