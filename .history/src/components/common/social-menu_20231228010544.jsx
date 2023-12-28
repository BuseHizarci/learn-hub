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
      <NavLink href={config.socialmedia.twitter} target="_blank">
        Twitter
        
   
    </Nav>
  );
};

export default SocialMenu;
