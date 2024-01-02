import React from "react";
import ContactForm from "./contact-form";

import "./index.scss";
import { Container, Row, Col, Card } from "react-bootstrap";

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
              <Col md={5}></Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Contact;
