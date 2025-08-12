import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { fakeBookApi } from "../api/fakeApi";

const BooksContext = createContext(null);

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async (qty = 20) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fakeBookApi.getBooks(qty);
      // normaliza para seu shape atual (tem 'year' e 'booked')
      setBooks(
        data.map((b) => ({
          id: b.id,
          title: b.title,
          author: b.author,
          year: b.publishedYear,
          cover: b.cover,
          description: b.description,
          booked: false,
        }))
      );
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const toggleBooked = useCallback((bookId) => {
    setBooks((prev) =>
      prev.map((book) => (book.id === bookId ? { ...book, booked: !book.booked } : book))
    );
  }, []);

  return (
    <BooksContext.Provider value={{ books, loading, error, refresh: load, toggleBooked }}>
      {children}
    </BooksContext.Provider>
  );
}

export function useBooks() {
  return useContext(BooksContext);
}
