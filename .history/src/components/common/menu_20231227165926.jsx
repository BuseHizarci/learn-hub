import React from "react";
import { Nav } from "react-bootstrap";


const Menu = () => {
  return (
    <>
     <Nav.Link as={Link} to="/homepage">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/courses">
                Courses{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/events">
                Event
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav></>
  );
};

export default Menu;
