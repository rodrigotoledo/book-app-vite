import React from "react";
import Navbar from './Navbar';
import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Layout() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="w-full"> 
          <Outlet />
        </div>
      </main>
      <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-black via-fuchsia-700 to-red-600 py-3 shadow-lg flex justify-center items-center">
        <nav className="flex space-x-8">
          {user ? (
          <Link to="/" className="text-white hover:underline">Home</Link>
          ) : (
            <>
            <Link to="/signin" className="text-white hover:underline">Sign In</Link>
            <Link to="/signup" className="text-white hover:underline">Sign Up</Link>
            </>
          )}
          <p>© 2023 BookApp</p>
        </nav>
      </footer>
    </div>
  );
}