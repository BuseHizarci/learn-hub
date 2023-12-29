import React from "react";
import "./welcome.scss";
import { Col, Container, Row } from "react-bootstrap";
const Welcome = () => {
  return (
    <div className="welcome">
      <Container>
        <Row>
          <Col md={6}>
            <Image  src="/images/about/welcome.png" />
          </Col>
          <Col md={6}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
