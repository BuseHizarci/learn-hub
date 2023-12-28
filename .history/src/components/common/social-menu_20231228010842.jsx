import React from "react";
import { NavLink } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, } from "react-icons/fa"; // import FaFacebook } from "react-icons/fa";
import { config } from "../../helpers/config";
import { Nav } from "react-bootstrap";
const SocialMenu = (props) => {
  return (
    <Nav {...props}>
      <Nav.Link href={config.socialmedia.facebook} target="_blank">
        <FaFacebook />
        Facebook
      </Nav.Link>
      <NavLink href={config.socialmedia.twitter} target="_blank">
        Twitter
      </NavLink>
      <NavLink href={config.socialmedia.instagram} target="_blank">
        Instagram
      </NavLink>
      <NavLink href={config.socialmedia.linkedin} target="_blank">
        LinkedIn
      </NavLink>
    </Nav>
  );
};

export default SocialMenu;
