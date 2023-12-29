import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slides from "../../helpers/data/slider.json";
import Image from "react-bootstrap/Image";
import "./slider.scss";
const Slider = () => {
  return (
    <Carousel fade c>
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <Image
            src="/images/{slide.image}"
            alt={slide.id}
            className="d-block w-100"
          />
          <Carousel.Caption className="bg-dark">
            {slide.title}
            {slide.desc}{" "}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
