import Shelves from "./Shelves";
import { Link } from "react-router-dom";
//import { useState, useEffect } from "react";
//import * as BooksAPI from "./BooksAPI";

const MainPage = ({updateShelf,books}) => {  

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelves updateShelf={updateShelf} books={books} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
