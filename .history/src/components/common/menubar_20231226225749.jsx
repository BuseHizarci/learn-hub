import React from "react";
import { Button, Container, NavDropdown, Navbar } from "react-bootstrap";

const Menubar = () => {
  return (
    <Navbar lg={lg} className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-lg-${lg}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-lg-${lg}`}
          aria-labelledby={`offcanvasNavbarLabel-lg-${lg}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Menubar;
