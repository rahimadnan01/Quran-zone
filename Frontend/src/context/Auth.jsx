import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(() => {
    return localStorage.getItem("isLogin") === "true";
  });

  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  useEffect(() => {
    localStorage.setItem("isLogin", isLogin);
    localStorage.setItem("user", JSON.stringify(user));
  }, [isLogin, user]);

  const login = (userData) => {
    setIsLogin(true);
    setUser(userData);
  };

  const logout = () => {
    setIsLogin(false);
    setUser(null);
    localStorage.removeItem("isLogin");
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ isLogin, login, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
