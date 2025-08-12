import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { BooksProvider } from "./context/BooksContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <BooksProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
          </Routes>
        </BooksProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
