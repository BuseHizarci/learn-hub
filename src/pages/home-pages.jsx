import React from "react";
import Slider from "../components/home/slider";
import Welcome from "../components/about/welcome";
import FeaturedCourses from "../components/home/featured-courses";
import UpcomingEvents from "../components/home/upcoming-events";
import PageHeader from "../components/common/page-header";

const HomePage = () => {
  return (
    <>
      <PageHeader title="Home" />
      <Slider />
      <Welcome />
      <FeaturedCourses />
      <UpcomingEvents />
    </>
  );
};

export default HomePage;
