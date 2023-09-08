import React from "react";
import "../styles/SiteBanner.css";
import Deals from "../components/Deals.js";

const SiteBanner = ({ HomeSiteBanner }) => {
  return (
    <div className="Bannerimg">
      {HomeSiteBanner.map((item, index) => (
        <Deals
          key={item+index}
          image={item.image}
          name={item.name}
          description={item.description}
          price={item.price}
          button={item.button}
          index={index}
        />
      ))}
    </div>
  );
};

export default SiteBanner;
