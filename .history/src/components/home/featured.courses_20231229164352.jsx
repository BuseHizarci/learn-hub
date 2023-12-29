import React from "react";
import { Card, Container, Row } from "react-bootstrap";

const FeaturedCourses = () => {
  return (
    <div className="featured-courses">
      <h2> Featured Courses</h2>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Image />
                <Card.title></Card.title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedCourses;
