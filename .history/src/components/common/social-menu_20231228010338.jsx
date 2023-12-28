import React from "react";

const SocialMenu = () => {
  return (
    <Nav {...props}>
      <Nav.Link href={config.socialmedia.facebook} to="/homepage">
        Facebook{" "}
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
