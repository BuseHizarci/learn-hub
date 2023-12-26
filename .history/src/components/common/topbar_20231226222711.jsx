import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Topbar = () => {
  return (
    <div className="topbar">
      <Container>
        <Row>
          <Col md={10}>config.project.slogan</Col>
          <Col md={2}>Login</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Topbar;
