import React from "react";
import Welcome from "../components/about/welcome";
import PageHeader from "../components/common/page-header";
import Instructors from "../components/about/instructors";
import Spacer from "../components/common/spacer";

const AboutPage = () => {
  return (
    <div>
      <PageHeader title="About Us" />
      <Spacer />
      <Welcome />
      <Spacer />
      <Instructors />
      <Spacer />
    </div>
  );
};

export default AboutPage;
