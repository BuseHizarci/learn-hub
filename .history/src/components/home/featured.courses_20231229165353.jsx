import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import courses from "../../helpers/data/courses.json";

const featuredCourses = courses.filter((item) => item.featured);
const FeaturedCourses = () => {
  return (
    <div className="featured-courses">
      <h2> Featured Courses</h2>
      <Container>
        <Row className="row xs={1} md={3} lg={4}">
          {featuredCourses.map((item) => (
            <Col>
              <Card>
                <Card.Body>
                  <Card.Img src={`/images/${item.image}`} alt={item.title} />
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Subtitle>
                    <Fa fai
                  </Card.Subtitle>
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
