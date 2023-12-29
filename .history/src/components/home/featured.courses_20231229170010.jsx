import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import courses from "../../helpers/data/courses.json";
import {
  FiUser,
  FiCalendar,
  FiTrendingUp,
  FiMessageCircle,
} from "react-icons/fi";
import CourseCard from "../courses/course-card";

const featuredCourses = courses.filter((item) => item.featured);
const FeaturedCourses = () => {
  return (
    <div className="featured-courses">
      <h2> Featured Courses</h2>
      <Container>
        <Row className="row xs={1} md={3} lg={4}">
          {featuredCourses.map((item) => (
            <Col>
              <CourseCard  />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedCourses;
