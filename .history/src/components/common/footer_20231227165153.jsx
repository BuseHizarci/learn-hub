import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { config } from "../../helpers/config";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <Link to="/">
              <Image src="/images/logo-white.png" alt={config.project.name} />
            </Link>
            <p>{config</p>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
