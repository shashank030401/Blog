import React from "react";
import { Routes, Route } from "react-router";
import PublishPost from "./Pages/PublishPost";
import LandingPage from "./Pages/LandingPage";
import AdminProfile from "./Pages/AdminProfile";
import BlogPage from "./Pages/BlogPage";
import { AuthProvider } from "./Contexts/AuthContext";
import Login from "./Pages/Login";
import Protected from "./Components/protected";
import AdminEditBlog from "./Pages/AdminEditBlog";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path = "/blog/:id" element={<BlogPage />} />
        <Route
          path="/publish"
          element={
            <Protected>
              <PublishPost />
            </Protected>
          }
        />
        <Route
          path="/admin"
          element={
            <Protected>
              <AdminProfile />
            </Protected>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <Protected>
              <AdminEditBlog />
            </Protected>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
