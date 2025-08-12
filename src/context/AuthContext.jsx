import React from "react";
import { createContext, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (userId) => {
    setUser({ id: userId });
  };

  const logout = () => {
    setUser(null);
    // navigate("/signin");
    navigate("/signin");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}