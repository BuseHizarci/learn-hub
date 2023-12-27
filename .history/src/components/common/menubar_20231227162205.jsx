import React from "react";
import { Container, Navbar, Offcanvas, Nav, Image } from "react-bootstrap";
import { config } from "../../helpers/config";
const Menubar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} onTouchMoveCapture="/">
          <Image src="/images/logo/logo.png" alt={config.project.name} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="mainMenu" />
        <Navbar.Offcanvas
          id="mainMenu"
          aria-labelledby="offcanvas"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="Offcanvas">Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Menubar;
