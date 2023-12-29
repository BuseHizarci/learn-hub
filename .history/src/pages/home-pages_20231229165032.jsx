import React from "react";
import Slider from "../components/home/slider";
import Welcome from "../components/about/welcome";
import FeaturedCourses from "../components/home/featured.courses";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <Welcome />
      <FeaturedCourses />
      
    </div>
  );
};

export default HomePage;
