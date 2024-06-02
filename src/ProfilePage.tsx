import { useAuth } from "./auth";

export const ProfilePage = () => {
  const auth = useAuth();
  const { user } = auth;

  return (
    <>
      <h1>perfil</h1>
      <p>Welcome {user?.username}</p>
    </>
  );
};
