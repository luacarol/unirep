import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens")) : null
  );

  const [user, setUser] = useState(() =>
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
  );

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/jwt/create/", {
        email,
        password,
      });

      const tokens = response.data;
      setAuthTokens(tokens);
      localStorage.setItem("authTokens", JSON.stringify(tokens));

      // Obter dados do usuário autenticado
      const userResponse = await axios.get("http://127.0.0.1:8000/auth/users/me/", {
        headers: {
          Authorization: `Bearer ${tokens.access}`,
        },
      });

      setUser(userResponse.data);
      localStorage.setItem("user", JSON.stringify(userResponse.data));
    } catch (error) {
      console.error("Erro ao fazer login:", error.response?.data || error.message);
      alert("Email ou senha inválidos.");
    }
  };

  const logout = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, authTokens }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
