// User
export interface Username {
  username: string;
}

export interface User {
  username: Username;
}

// Blog
export interface BlogContent {
  title: string;
  slug: string;
  content: string;
  author: string;
}

export interface BlogData extends Array<BlogContent> {}

// Context
export interface contextAuth {
  user: User["username"] | null;
  login(username: User["username"]): void;
  logout(): void;
}

// Props
export interface BlogLinkProps extends Pick<BlogContent, "title" | "slug"> {}
export interface AuthProviderProps {
  children: React.ReactNode;
}
