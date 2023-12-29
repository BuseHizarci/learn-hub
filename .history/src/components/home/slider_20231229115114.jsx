import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slides from "../../helpers/data/slider";

const Slider = () => {
  return (
    <Carousel>
   {slides.map((slide) => <ExampleCarouselImage text={slide.title} />)}
      <Carousel.Item>
        <Image
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
  );
};

export default Slider;
