import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Prenavbar from "./components/Prenavbar";
import Navbar from "./components/Navbar";
import data from "./data/data.json";
import SiteBanner from "./components/SiteBanner.js";
import SpecialOffer from "./components/SpecialOffer.js";
import Salaider from "./components/Salaider.js";
import Service from "./components/Service.js";
import FooterSection from "./components/FooterSection.js";

function App() {
  return (
    <Router>
      <Prenavbar />
      <Navbar />
      <SiteBanner HomeSiteBanner={data.hotAccessories.HomeSiteBanner} />
      <SpecialOffer specialItems={data.hotAccessories.specialItems} />
      <Salaider CarouselOffers={data.hotAccessories.CarouselOffers} />
      <Service />
      <FooterSection footer={data.footer} />
    </Router>
  );
}

export default App;
