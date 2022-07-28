const Book = ({  b, updateShelf }) => {
  
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 192,
            backgroundImage: `url("${b.imageLinks.smallThumbnail}")`,
          }}
        ></div>
        <form className="book-shelf-changer">
          <select onChange={updateShelf} value={b.shelf ? b.shelf : "none"}>
            <option value="" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </form>
      </div>
      <div className="book-title">{b.title}</div>
      <div className="book-authors">{b.authors.toString()}</div>
    </div>
  );
};

export default Book;
