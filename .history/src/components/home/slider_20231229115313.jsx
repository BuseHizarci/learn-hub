import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slides from "../../helpers/data/slider";

const Slider = () => {
  return (
    <Carousel>
      {slides.map((slide) => (
        <Carousel.Item>
          <Image
            src="/images/{slide.image}"
            alt="First slide"
            className="d-block w-100"
          />
          <Carousel.Caption>
            {slide.title}
{slide.des}          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
