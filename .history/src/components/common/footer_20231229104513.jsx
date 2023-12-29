import React from "react";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { config } from "../../helpers/config";
import Menu from "./menu";
import "./footer.scss";
import SocialMenu from "./social-menu";
import ContactMenu from "./contact-menu";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="g-5">
          <Col lg={3} md={4}>
            <Link to="/">
              <Image
                src="/images/logo/logo-white.png"
                alt={config.project.name}
              />
            </Link>
            <p>{config.project.description}</p>
          </Col>
          <Col lg={3} md={4}>
            <h3>Quick Links</h3>
            <Menu className="flex-column" />
          </Col>

          <Col lg={3} md={4}>
            <h3>Social Links</h3>
            <SocialMenu className="flex-column" />
          </Col>
          <Col>
            <h3>Contact us!</h3>
            <ContactMenu />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
