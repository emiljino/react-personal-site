/** @format */

import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Components/Pages/Home";
import Projects from "./Components/Pages/Projects";
import CV from "./Components/Pages/CV";
import Contact from "./Components/Pages/Contact";
import ScotlandYardCW from "./Components/Pages/ScotlandYardCW";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/projects" exact Component={Projects} />
          <Route path="/cv" exact Component={CV} />
          <Route path="/contact" exact Component={Contact} />
          <Route path="/scotlandyardcw" exact Component={ScotlandYardCW} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
