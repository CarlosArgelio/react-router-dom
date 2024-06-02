import { useNavigate, useParams } from "react-router-dom";

import { useAuth } from "./auth";
import { blogdata } from "./blogdata";

export const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const auth = useAuth();
  const { user } = auth;

  const blogPost = blogdata.find((post) => post.slug === slug);

  const canDelete = user?.isAdmin || blogPost?.author === user?.username;

  const returnToBlog = () => {
    navigate("/blog");
  };

  const handleDeletePost = () => {
    const findIndex = blogdata.findIndex(
      // eslint-disable-next-line prettier/prettier
      (blog) => blog.title === blogPost?.title
    );
    blogdata.splice(findIndex, 1);
  };

  return (
    <>
      <h2>{blogPost?.title}</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <p>{blogPost?.author}</p>
      <p>{blogPost?.content}</p>

      {(user?.isAdmin || canDelete) && (
        <button onClick={handleDeletePost}>Eliminar blogpost</button>
      )}
    </>
  );
};
