export const LogoutPage = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Ya no estas logueado");
  };

  return (
    <>
      <h1>Logout</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="username">Seguro de que quieres salir?</label>
        <button>Salir</button>
      </form>
    </>
  );
};
