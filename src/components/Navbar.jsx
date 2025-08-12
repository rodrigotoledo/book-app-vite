import React from "react";
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-black via-fuchsia-700 to-red-600">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">BookApp</Link>
        <div className="space-x-4">
          {user ? (
            <>
              <span className="mr-4 text-pink-400">Welcome, User #{user.id}</span>
              <button 
                onClick={logout} 
                className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="px-4 py-2 rounded bg-fuchsia-700 text-white hover:bg-fuchsia-800 mr-2 hover:underline">Sign In</Link>
              <Link to="/signup" className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 hover:underline">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}