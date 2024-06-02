import { useParams } from "react-router-dom";
import { blogdata } from "./blogdata";

export const BlogPost = () => {
  const { slug } = useParams();

  const blogPost = blogdata.find((post) => post.slug === slug);

  return (
    <>
      <h2>{blogPost?.title}</h2>
      <p>{blogPost?.author}</p>
      <p>{blogPost?.content}</p>
    </>
  );
};
