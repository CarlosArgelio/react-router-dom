// User
export interface User {
  username: string;
  isAdmin: string | undefined;
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
  user: User | null;
  login(username: User["username"]): void;
  logout(): void;
}

// Props
export interface ChildrenProp {
  children: React.ReactNode;
}
export interface BlogLinkProps extends Pick<BlogContent, "title" | "slug"> {}
export interface AuthProviderProps extends ChildrenProp {}
export interface AuthRouteProps extends ChildrenProp {}
