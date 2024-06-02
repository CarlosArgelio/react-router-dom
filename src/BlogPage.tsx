import React from "react";
import { Link, Outlet } from "react-router-dom";
import { blogdata } from "./blogdata";
import { BlogLinkProps } from "./types";

export const BlogPage = () => {
  return (
    <>
      <h1>Blog</h1>

      <Outlet />

      <ul>
        {blogdata.map((post, index) => (
          <BlogLink key={index} title={post.title} slug={post.slug} />
        ))}
      </ul>
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
