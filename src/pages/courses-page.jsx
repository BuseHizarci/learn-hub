import React from "react";
import Courses from "../components/courses/courses";
import PageHeader from "../components/common/page-header";
import Spacer from "../components/common/spacer";

const CoursesPage = () => {
  return (
    <>
      <PageHeader title="Courses" />
      <Courses />
      <Spacer />
    </>
  );
};

export default CoursesPage;
