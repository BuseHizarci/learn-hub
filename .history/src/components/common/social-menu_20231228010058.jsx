import React from "react";

const SocialMenu = () => {
  return (
    <Nav {...props}>
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
    </Nav>
  );
};

export default SocialMenu;
