import React from "react";

const SocialMenu = () => {
  return (
    <Nav {...props}>
      <Nav.Link href= to="/homepage">
        Home
      </Nav.Link>
      <Nav.Link href={Link} to="/courses">
        Courses{" "}
      </Nav.Link>
      <Nav.Link href={Link} to="/events">
        Event
      </Nav.Link>
      <Nav.Link href={Link} to="/about">
        About
      </Nav.Link>
      <Nav.Link href={Link} to="/contact">
        Contact
      </Nav.Link>
    </Nav>
  );
};

export default SocialMenu;
