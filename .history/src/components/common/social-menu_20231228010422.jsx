import React from "react";
import {} from "react-icons";
const SocialMenu = () => {
  return (
    <Nav {...props}>
      <Nav.Link
        href={config.socialmedia.facebook}
        target="_blank"
        to="/homepage"
      >
        Facebook{" "}
      </Nav.Link>
    </Nav>
  );
};

export default SocialMenu;
