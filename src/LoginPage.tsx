import React, { useState } from "react";
import { useAuth } from "./auth";

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
