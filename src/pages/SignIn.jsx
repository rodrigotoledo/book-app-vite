import React from "react";
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { fakeAuth } from '../api/fakeApi';
import { useAuth } from '../context/AuthContext';

export default function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (email, password) => {
    const response = await fakeAuth.login(email, password);
    login(response.userId);
    navigate('/');
  };

  return <AuthForm type="signin" onSubmit={handleSubmit} />;
}