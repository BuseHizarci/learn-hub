import React from "react";
import "./welcome.scss";
import { Col, Container, Row ,Image } from "react-bootstrap";
const Welcome = () => {
  return (
    <div className="welcome">
      <Container>
        <Row>
          <Col md={6}>
            <Image className="img-fluid" src="/images/about/welcome.png" />
          </Col>
          <Col md={6}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
