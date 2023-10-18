import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
// import Prenavbar from "./components/Prenavbar";
import Navbar from "./components/Navbar";
import data from "./data/data.json";
import Service from "./components/Service.js";
import FooterSection from "./components/FooterSection.js";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
    <Router>
      {/* <Prenavbar /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/Discover" element={< Service/>} />
      </Routes>
      <Service />
      <FooterSection footer={data.footer} />
    </Router>
     
    </>
  );
}

export default App;
