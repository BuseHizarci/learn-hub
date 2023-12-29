import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slides from "../../helpers/data/slider";

const Slider = () => {
  return (
    <Carousel>
   {slides.map((slide) => <ExampleCarouselImage text={slide.title} />)}
   
   
    
    </Carousel>
  );
};

export default Slider;
