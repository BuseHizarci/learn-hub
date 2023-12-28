import React from "react";
import {} from "react-icons";
const SocialMenu = () => {
  return (
    <Nav {...props}>
      <Nav.Link
        href={config.socialmedia.facebook}
        target="_blank"
        to="/homepage"
      ><Fa fa
        Facebook{" "}
      </Nav.Link>
    </Nav>
  );
};

export default SocialMenu;
