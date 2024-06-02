import React, { createContext, useContext, useState } from "react";
import { AuthProviderProps, AuthRouteProps, User, contextAuth } from "./types";
import { Navigate, useNavigate } from "react-router-dom";

const adminList = ["User1", "User2", "User3"];

const AuthContext = createContext({} as contextAuth);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User["username"] | null>(null);

  const login: contextAuth["login"] = ({ username }) => {
    const isAdmin = adminList.find((admin) => admin === username);
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

export const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const auth = useAuth();
  const { user } = auth;

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
