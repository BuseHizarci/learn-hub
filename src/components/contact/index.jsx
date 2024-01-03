import React from "react";
import ContactForm from "./contact-form";
import Map from "./map";
import "./index.scss";
import { Container, Row, Col, Card } from "react-bootstrap";
import GetInTouch from "./get-in-touch";

const Contact = () => {
  return (
    <div className="contact">
      <Container>
        <Card className="contact-card">
          <Card.Body>
            <Row className="g-5">
              <Col md={7}>
                <ContactForm />
              </Col>
              <Col md={5}>
                <GetInTouch />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
      <Map />
    </div>
  );
};

export default Contact;
