import React, { useState } from "react";
import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";

export const LoginPage = () => {
  const auth = useAuth();
  const [username, setUsername] = useState<string>("");

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth.login({ username });
  };

  if (auth.user) {
    <Navigate to="/profile" />;
  }

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="username">Escribe tu nombre</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={onChangeUsername}
        />

        <button>Entrar</button>
      </form>
    </>
  );
};
