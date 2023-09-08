import React from "react";
import "../styles/SpecialOffer.css";
import Deals from "../components/Deals.js";

const SpecialOffer = ({ specialItems }) => {
  return (
    <div className="SpecialItems">
      {specialItems.map((item, index) => (
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
export default SpecialOffer;
