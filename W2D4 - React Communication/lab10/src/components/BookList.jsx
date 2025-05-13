import { useState } from "react";
import { Link } from "react-router";
import { useBookContext } from "../context/BookContext";
import { EditBook } from "./EditBook";
export default function BookList() {
  const { books, loading, error, deleteBook } = useBookContext();
  const [editingBookId, setEditingBookId] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      {books.map((book, index) => (
        <div className="card" key={index}>
          {editingBookId === book.id ? (
            <EditBook book={book} setEditingBookId={setEditingBookId} />
          ) : (
            <>
              <h3>
                {book.title} {book.id}
              </h3>
              <p>{book.author}</p>
              <Link type="button" to={`/edit/${book.id}`}>
                Edit
              </Link>
              {/* <button href="/edit" onClick={() => setEditingBookId(book.id)}>
                Edit
              </button> */}
              <button onClick={() => deleteBook(book.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
