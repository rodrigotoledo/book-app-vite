import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AuthForm({ type, onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(email, password);
    } catch (err) {
      setError(err.message || 'An error occurred');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-900 rounded-xl shadow-lg p-8 border border-fuchsia-700">
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        {type === 'signin' ? 'Sign In' : 'Sign Up'}
      </h1>
      {error && <div className="mb-4 text-red-400 rounded">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Fill with your email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white mb-2" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Fill with your password"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded-full bg-fuchsia-700 text-white font-bold hover:bg-fuchsia-800 transition"
        >
          {type === 'signin' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
      <div className="mt-4 text-center">
        {type === 'signin' ? (
          <p>
            Don't have an account? <Link to="/signup" className="text-fuchsia-400 hover:underline">Sign Up</Link>
          </p>
        ) : (
          <p>
            Already have an account? <Link to="/signin" className="text-fuchsia-400 hover:underline">Sign In</Link>
          </p>
        )}
      </div>
    </div>
  );
}