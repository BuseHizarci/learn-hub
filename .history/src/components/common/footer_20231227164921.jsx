import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <Link to="/">
              <Image src="/images/logo-white.png" alt={config.project.name} />
            </Link>
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
