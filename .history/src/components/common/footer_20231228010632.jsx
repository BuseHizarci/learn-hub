import React from "react";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { config } from "../../helpers/config";
import Menu from "./menu";
import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <Link to="/">
              <Image
                src="/images/logo/logo-white.png"
                alt={config.project.name}
              />
            </Link>
            <p>{config.project.description}</p>
          </Col>
          <Col>
            <h3>Quick Links</h3>
            <Menu className="flex-column" />
          </Col>
          
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
