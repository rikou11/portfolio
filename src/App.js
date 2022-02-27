import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound.js";
import Layout from "./components/Layout";

const App = () => {
  // const [first] = useState(true);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
          {/* redirect  path that have a re   (optioneel ) to specific path that we want  */}
          <Route path="/re" element={<Navigate to="/404" />} />

          {/* <Route  /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
