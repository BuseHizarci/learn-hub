import React from "react";
import { NavLink } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
const SocialMenu = () => {
  return (
    <Nav {...props}>
      <Nav.Link
        href={config.socialmedia.facebook}
        target="_blank"
        to="/homepage"
      >
        {" "}
        <FaFacebook />
        Facebook 
      </Nav.Link>
      <NavLink
   
    </Nav>
  );
};

export default SocialMenu;
