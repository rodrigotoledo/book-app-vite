import React from "react";
import { useBooks } from '../context/BooksContext';
import { useAuth } from '../context/AuthContext';

export default function BookCard({ book }) {
  const { toggleBooked } = useBooks();
  const { user } = useAuth();

  return (
    <div className='bg-gray-900 rounded-3xl shadow-2xl border-2 border-fuchsia-700 overflow-hidden p-6'>
      <h3 className="text-xl font-bold mb-2">{book.title}</h3>
      <p className="text-gray-600 mb-1">Author: {book.author}</p>
      <p className="text-gray-500 mb-3">Year: {book.year}</p>
      {user && (
        <button
          onClick={() => toggleBooked(book.id)}
          className={`px-4 py-2 border-2 border-fuchsia-700 rounded ${
            book.booked 
              ? 'bg-pink-500 hover:bg-pink-600 text-white'
              : 'bg-pink-500 hover:bg-pink-400  text-white'
          }`}
        >
          {book.booked ? 'Booked ✓' : 'Book This'}
        </button>
      )}
    </div>
  );
}