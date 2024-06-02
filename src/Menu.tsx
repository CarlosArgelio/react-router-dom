import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

export interface routeNav {
  to: string;
  text: string;
  isPrivate: boolean;
  publicOnly?: boolean;
}

export const Menu = () => {
  const auth = useAuth();
  const { user } = auth;

  return (
    <nav>
      <ul>
        {routes.map((route, index) => {
          const { to, text, isPrivate, publicOnly } = route;

          if (publicOnly && user) return null;
          if (isPrivate && !user) return null;
          return (
            <li key={index}>
              <NavLink
                to={to}
                style={({ isActive }) => ({
                  color: isActive ? "red" : "blue",
                })}
              >
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const routes: routeNav[] = [];
routes.push({
  to: "/",
  text: "Home",
  isPrivate: false,
});
routes.push({
  to: "/blog",
  text: "Blog",
  isPrivate: false,
});
routes.push({
  to: "/profile",
  text: "Profile",
  isPrivate: true,
});
routes.push({
  to: "/login",
  text: "Login",
  isPrivate: false,
  publicOnly: true,
});
routes.push({
  to: "/logout",
  text: "Logout",
  isPrivate: true,
});
