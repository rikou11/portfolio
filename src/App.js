import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound.js";
import Layout from "./components/Layout";
import ProjectId from "./pages/ProjectDisplay";
// import Blog from "./pages/Blog/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/project/*"
          element={
            <Layout>
              <Project />
            </Layout>
          }
        />
        <Route
          path="resume"
          element={
            <Layout>
              <Resume />
            </Layout>
          }
        />
        <Route
          path="contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="project/:id/*"
          element={
            <Layout>
              <ProjectId />
            </Layout>
          }
        />
        {/* <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Blog />} /> */}
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
        {/* redirect  path that have a re   (optioneel ) to specific path that we want  */}
        {/* <Route path="/re" element={<Navigate to="/404" />} /> */}
        {/* <Route path="/404" element={<NotFound />} /> */}
        {/* <Route  /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
