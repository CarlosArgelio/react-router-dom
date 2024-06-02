import React, { createContext, useContext, useState } from "react";
import { AuthProviderProps, contextAuth, User } from "./types";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({} as contextAuth);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User["username"] | null>(null);

  const login: contextAuth["login"] = ({ username }) => {
    setUser({ username });
    navigate("/profile");
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  const auth = { user, login, logout };
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
