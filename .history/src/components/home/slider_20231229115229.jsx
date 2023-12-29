import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slides from "../../helpers/data/slider";

const Slider = () => {
  return (
    <Carousel>
      {slides.map((slide) => (
        <Carousel.Item>
          <Image
            src="/images/{slide"
            }
            className="d-block w-100"
          />
          <Carousel.Caption>
            {slides.title}
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
