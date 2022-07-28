import Book from "./Book";

const Shelves = ({ updateShelf, books }) => {
  /*Books data:
    title
    authors array
    imageLinks.smallThumbnail
    id key
    shelf
    */
  
  const shelves = [
    { value: "currentlyReading", name: "Currently Reading" },
    { value: "wantToRead", name: "Want to Read" },
    { value: "read", name: "Read" },
  ];

  return (
    <div className="bookshelf">
      {shelves.map((s) => {
        return (
          <div key={s.value}>
            <h2 className="bookshelf-title">{s.name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books
                  .filter((b) => b.shelf === s.value)
                  .map((b) => {
                    return (
                      <li key={b.id}>
                        <Book
                          b={b}
                          updateShelf={(e) => updateShelf(b, e)}
                        />
                      </li>
                    );
                  })}
              </ol>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shelves;
