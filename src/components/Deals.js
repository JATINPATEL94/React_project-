import React from "react";

const Deals = ({ image, name, description, price, button, index }) => {
  const className = `Deals-${index + 1} Deals`;
  return (
    <div className={className}>
      <img src={image} alt="" />
      <div className="details">
        <h2>{name}</h2>
        <h4>{description}</h4>
        <h4>{price}</h4>
        <div className="button">{button}</div>
      </div>
    </div>
  );
};

export default Deals;
