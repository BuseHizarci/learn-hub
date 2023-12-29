import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slides from "../../helpers/data/slider";

const Slider = () => {
  return (
    <Carousel>
      {slides.map((slide) => (
        <Carousel.Item>
          <Image
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
            className="d-block w-100"
          />
          <Carousel.Caption>
            {slide.title}
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
