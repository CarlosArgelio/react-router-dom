export interface BlogContent {
  title: string;
  slug: string;
  content: string;
  author: string;
}

export interface BlogData extends Array<BlogContent> {}

// Props
export interface BlogLinkProps extends Pick<BlogContent, "title" | "slug"> {}
