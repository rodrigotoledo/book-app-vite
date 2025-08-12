import React, { useEffect } from "react";
import { useBooks } from '../context/BooksContext';
import BookCard from '../components/BookCard';
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { books } = useBooks();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      window.location.href = '/signin';
    }
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-black py-8">
      <h1 className="text-4xl font-extrabold text-white mb-8 tracking-tight">Book Collection</h1>
      <div className="grid grid-cols-1 grid-cols-3 gap-6">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}