import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageHeader from "../common/page-header";
import instructors from "../../helpers/data/instructors.json";
import InstructorCard from "./instructor-card";

const Instructors = () => {
  return (
    <>
      <Container>
        <Row className="g-5" xs={1} sm={2} md={3} lg={4}>
          <Col>
            <h2>Our Most Experienced Instructors</h2>
          </Col>
          {instructors.map((item) => (
            <Col>
              <InstructorCard {...item} />{" "}
            </Col>
          ))}{" "}
        </Row>
      </Container>
    </>
  );
};

export default Instructors;
