import React, { useState, createContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { progCariocas, createSession } from "../axios/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const usuarioResgatado = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (usuarioResgatado) {
      setUser(JSON.parse(usuarioResgatado));
      progCariocas.defaults.headers.Authorization = `Bearer ${token}`;
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const res = await createSession(email, password);

    const userLogado = res.data.user;
    const token = res.data.token;

    localStorage.setItem("user", JSON.stringify(userLogado));
    localStorage.setItem("token", token);

    progCariocas.defaults.headers.Authorization = `Bearer ${token}`;

    setUser(userLogado);
    navigate("/painel");
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    progCariocas.defaults.headers.Authorization = null;

    setUser(null);
    navigate("/login");
  };
  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
