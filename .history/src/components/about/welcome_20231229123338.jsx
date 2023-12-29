import React from "react";
import "./welcome.scss";
import { Container } from "react-bootstrap";
const Welcome = () => {
  return (
    <div className="welcome">
      <Container>
        <Row>
          <Col md={6}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
