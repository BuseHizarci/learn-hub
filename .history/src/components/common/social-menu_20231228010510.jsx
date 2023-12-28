import React from "react";
import {FaFacebook} from "react-icons/fa";
const SocialMenu = () => {
  return (
    <Nav {...props}>
      <Nav.Link
        href={config.socialmedia.facebook}
        target="_blank"
        to="/homepage"
      > <FaFacebook/><
        Facebook{" "}></Facebook>
      </Nav.Link>

    </Nav>
  );
};

export default SocialMenu;
