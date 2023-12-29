import React from "react";
import "./welcome.scss";
import { Col, Container, Row, Image } from "react-bootstrap";
const Welcome = () => {
  return (
    <div className="welcome">
      <Container>
        <Row>
          <Col md={6}>
            <Image className="img-fluid" src="/images/about/welcome.png" />
          </Col>
          <Col md={6}>
            <h3>Welcome</h3>
            <p> {config.project.description} </p>
            <p> {config.project.slogan} </p>
            <p> {config.project.description} </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
