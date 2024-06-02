import { HashRouter, Routes, Route } from "react-router-dom";

import { Menu } from "./Menu";
import { AuthProvider } from "./auth";
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { ProfilePage } from "./ProfilePage";
import { BlogPost } from "./BlogPost";
import { LoginPage } from "./LoginPage";
import { LogoutPage } from "./LogoutPage";

export const App = () => {
  return (
    <HashRouter>
      <AuthProvider>
        <Menu />

        {/* Routes is dinamic to all routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/blog" element={<BlogPage />}>
            <Route path=":slug" element={<BlogPost />} />
          </Route>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/profile" element={<ProfilePage />} />

          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
};
