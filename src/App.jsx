import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./pages/Project";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import notFound from "./pages/notFound";
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/project" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notFound" element={<notFound />} />
        <Route path="/re" element={<Navigate to="/404" />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
