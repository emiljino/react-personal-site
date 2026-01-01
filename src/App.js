/** @format */

import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Components/Pages/Home";
import Projects from "./Components/Pages/Projects";
import CV from "./Components/Pages/AC_CV__apps_";
import Contact from "./Components/Pages/Contact";
import Footer from "./Components/Footer";
import ProjectDisplay from "./Components/Pages/ProjectDisplay";
import ScrollToTop from "./Components/ScrollToTop";
import NotFound from './Components/Pages/NotFound';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop /> 
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/projects" exact Component={Projects} />
          <Route path="/project/:id" exact Component={ProjectDisplay} />
          <Route path="/cv" exact Component={CV} />
          <Route path="/contact" exact Component={Contact} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
