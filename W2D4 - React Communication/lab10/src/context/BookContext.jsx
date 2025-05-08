import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
const BookContext = createContext(null);
export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function deleteBook(id) {
    try {
      console.log(id);
      await axios.delete(
        `https://681cf41cf74de1d219ae5d39.mockapi.io/api/v1/books/${id}`
      );
      setBooks(books.filter((book) => book.id !== id));
    } catch {
      setError("Failed to delete book");
    }
  }

  async function getBooks() {
    try {
      setLoading(true);
      const result = await axios.get(
        "https://681cf41cf74de1d219ae5d39.mockapi.io/api/v1/books"
      );
      setBooks(result.data);
      setError(null);
    } catch (error) {
      setError("Failed to fetch books", error);
    } finally {
      setLoading(false);
    }
  }

  async function addBook(book) {
    try {
      const res = await axios.post(
        "https://681cf41cf74de1d219ae5d39.mockapi.io/api/v1/books",
        book
      );
      setBooks([...books, res.data]);
    } catch (error) {
      setError("Failed to add book: ", error);
    }
  }

  async function updateBook(id, updatedBook) {
    try {
      const update = await axios.put(
        `https://681cf41cf74de1d219ae5d39.mockapi.io/api/v1/books/${id}`,
        updatedBook
      );
      setBooks(books.map((book) => (book.id === id ? update.data : book)));
    } catch (error) {
      setError("Failed to update book: ", error);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <BookContext.Provider
      value={{
        books,
        addBook,
        updateBook,
        deleteBook,
        loading,
        error,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
export const useBookContext = () => useContext(BookContext);
