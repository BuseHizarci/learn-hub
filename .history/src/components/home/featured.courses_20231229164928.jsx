import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import courses from "../../helpers/data/courses.json";

const featuredCourses = courses.filter((item) => item.featured);
const FeaturedCourses = () => {
  return (
    <div className="featured-courses">
      <h2> Featured Courses</h2>
      <Container>
        <Row>
          {featuredCourses.map((item) => (
            <Col>
              <Card>
                <Card.Body>
                  <Card.Image src={item.image} />
                  <Card.Title></Card.Title>
                  <Card.Subtitle></Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedCourses;
