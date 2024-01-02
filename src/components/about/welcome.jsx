import React from "react";
import "./welcome.scss";
import { config } from "../../helpers/config";
import { Col, Container, Row, Image } from "react-bootstrap";
const Welcome = () => {
  return (
    <div className="welcome">
      <Container>
        <Row className="align-items-center g-5">
          <Col md={6}>
            <Image className="img-fluid" src="/images/about/welcome.jpg" />
          </Col>
          <Col md={6}>
            <h3>Welcome</h3>
            <p> {config.project.description} </p>
            <p> {config.project.slogan} </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
