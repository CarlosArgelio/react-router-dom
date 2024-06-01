import { HashRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { ProfilePage } from "./ProfilePage";

import { Menu } from "./Menu";

export const App = () => {
  return (
    <HashRouter>
      <Menu />

      {/* Routes is dinamic to all routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </HashRouter>
  );
};
