import { useState } from "react";
import { useBookContext } from "../context/BookContext";

export const EditBook = ({ book }) => {
  const { updateBook } = useBookContext();
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook(book, { title, author });
    // setEditingBookId(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit">Save</button>
      {/* <button type="button" onClick={() => setEditingBookId(null)}>
        Cancel
      </button> */}
    </form>
  );
};
