import { useAuth } from "./auth";

export const ProfilePage = () => {
  const auth = useAuth();
  return (
    <>
      <h1>perfil</h1>
      <p>Welcome {auth.user?.username}</p>
    </>
  );
};
