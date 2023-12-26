import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { config } from "../../helpers/config";
const Topbar = () => {
  return (
    <div className="topbar">
      <Container>
        <Row>
          <Col md={10} className="d-none d">config.project.slogan</Col>
          <Col md={2}>Login</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Topbar;
