import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slides from "../../helpers/data/slider";
import { CarouselItem } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel>
      {slides.map(slide=> <CarouselItem )}
      
    </Carousel>
  );
};

export default Slider;
