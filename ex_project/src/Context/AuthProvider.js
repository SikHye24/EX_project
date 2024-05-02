import React, { useState } from 'react';
import AuthContext from './AuthContext';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(initialState);

  const login = (user) => {
    setAuthState({ isLoggedIn: true, user });
  };

  const logout = () => {
    setAuthState(initialState);
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
