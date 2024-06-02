import { useNavigate, useParams } from "react-router-dom";

import { useAuth } from "./auth";
import { blogdata } from "./blogdata";

export const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const auth = useAuth();

  const blogPost = blogdata.find((post) => post.slug === slug);

  const returnToBlog = () => {
    navigate("/blog");
  };

  return (
    <>
      <h2>{blogPost?.title}</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <p>{blogPost?.author}</p>
      <p>{blogPost?.content}</p>
    </>
  );
};
