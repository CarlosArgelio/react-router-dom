import { NavLink } from "react-router-dom";

export interface routeNav {
  to: string;
  text: string;
}

export const Menu = () => {
  return (
    <nav>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <NavLink
              to={route.to}
              style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            >
              {route.text}
            </NavLink>
          </li>
        ))}
        {/* <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link to={"/profile"}>Profile</Link>
        </li> */}

        {/* <li>
          <NavLink
            to={"/"}
            // className={({ isActive }) => ""}
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/blog"}
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/profile"}
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          >
            Profile
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

const routes: routeNav[] = [];
routes.push({
  to: "/",
  text: "Home",
});
routes.push({
  to: "/blog",
  text: "Blog",
});
routes.push({
  to: "/profile",
  text: "Profile",
});
