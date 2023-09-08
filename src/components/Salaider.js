import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "../styles/Salaider.css";

const Salaider = ({ CarouselOffers }) => {
  return (
    <Carousel fade>
      {CarouselOffers.map((item, index) => (
        <Carousel.Item
          key={item+index}
          id="salaider"
          interval={5000}
          keyboard="true"
        >
          <img
            className="d-blk w100 image"
            id="salaiderImg"
            src={item.image}
            alt={item.image}
          />
          <Carousel.Caption>
            <h4 className="tags">{item.tag}</h4>
            <h2 className="name">{item.name}</h2>
            <h4 className="description">{item.description}</h4>
            <div className="button">{item.button}</div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Salaider;
