import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { useAuth } from "./auth";
import { blogdata } from "./blogdata";
import { BlogContent, BlogLinkProps } from "./types";

export const BlogPage = () => {
  const auth = useAuth();
  const { user } = auth;

  const [title, setTitle] = useState<BlogContent["title"]>();
  const [slug, setSlug] = useState<BlogContent["slug"]>();
  const [content, setContent] = useState<BlogContent["content"]>();

  const [data, setData] = useState<BlogContent[]>(blogdata);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title) return;
    if (!slug) return;
    if (!content) return;
    if (!user?.username) return;

    const newData = [...data, { author: user.username, title, slug, content }];

    setData(newData);
  };

  return (
    <>
      <h1>Blog</h1>

      <Outlet />

      <ul>
        {data.map((post, index) => (
          <BlogLink key={index} title={post.title} slug={post.slug} />
        ))}
      </ul>

      <p>Crear nuevo post</p>
      <details>
        <form onSubmit={(e) => onSubmit(e)}>
          <fieldset>
            <legend>Crear nuevo post</legend>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="title" />
              title
              <input
                id="title"
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="slug" />
              slug
              <input
                id="slug"
                type="text"
                placeholder="Slug"
                onChange={(e) => setSlug(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="content" />
              content
              <textarea
                id="content"
                placeholder="Content"
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </fieldset>
          <button type="submit">Crear Post</button>
        </form>
      </details>
    </>
  );
};

export const BlogLink: React.FC<BlogLinkProps> = ({ title, slug }) => {
  return (
    <li>
      <Link to={`/blog/${slug}`}>{title}</Link>
    </li>
  );
};
