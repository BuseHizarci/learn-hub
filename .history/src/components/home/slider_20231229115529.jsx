import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slides from "../../helpers/data/slider";
import Image from "react-bootstrap/Image";

const Slider = () => {
  return (
    <Carousel>
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <Image
            src="/images/{slide.image}"
            alt={slide.id}
            className="d-block w-100"
          />
          <Carousel.Caption>
            {slide.title}
            {slide.desc}{" "}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
