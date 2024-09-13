// File: frontend/src/services/auth.js
import { setAuthToken } from './api';

export const login = (token) => {
  localStorage.setItem('token', token);
  setAuthToken(token);
};

export const logout = () => {
  localStorage.removeItem('token');
  setAuthToken(null);
};

export const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};