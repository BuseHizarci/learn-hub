import React from "react";
import {Fa} from "react-icons/fa";
const SocialMenu = () => {
  return (
    <Nav {...props}>
      <Nav.Link
        href={config.socialmedia.facebook}
        target="_blank"
        to="/homepage"
      ><
        Facebook{" "}
      </Nav.Link>
    </Nav>
  );
};

export default SocialMenu;
