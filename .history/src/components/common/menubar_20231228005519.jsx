import React from "react";
import { Container, Navbar, Offcanvas, Nav, Image } from "react-bootstrap";
import { config } from "../../helpers/config";
import { Link } from "react-router-dom";
import Menu 
const Menubar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image src="/images/logo/logo.png" alt={config.project.name} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="mainMenu" />
        <Navbar.Offcanvas
          id="mainMenu"
          aria-labelledby="offcanvas"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="Offcanvas">
              <Image src="/images/logo/logo.png" alt={config.project.name} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
         <>
            <a href={`tel ${config.phone}`} className="btn btn-primary">
              Call now !{" "}
            </a>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Menubar;
