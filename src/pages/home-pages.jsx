import React from "react";
import Slider from "../components/home/slider";
import Welcome from "../components/about/welcome";
import FeaturedCourses from "../components/home/featured-courses";
import UpcomingEvents from "../components/home/upcoming-events";
import PageHeader from "../components/common/page-header";
import Spacer from "../components/common/spacer";
const HomePage = () => {
  return (
    <>
      <PageHeader title="Home" />
      <Slider />
      <Spacer/>
      <Welcome />
      <Spacer />
      <FeaturedCourses />
      <Spacer />
      <UpcomingEvents />
    </>
  );
};

export default HomePage;
