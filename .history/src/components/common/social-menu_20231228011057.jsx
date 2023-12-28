import React from "react";
import { NavLink } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // import FaFacebook } from "react-icons/fa";
import { Nav } from "react-bootstrap";
import { config } from "../../helpers/config";
const SocialMenu = (props) => {
  return (
    <Nav {...props}>
      <Nav.Link href={config.contact.socialmedia.facebook} target="_blank">
        <FaFacebook />
        Facebook
      </Nav.Link>
      <NavLink href={config.contact.socialmedia.twitter} target="_blank">
        Twitter
        <FaTwitter />
      </NavLink>
      <NavLink href={config.socialmedia.instagram} target="_blank">
        Instagram
        <FaInstagram />
      </NavLink>
      <NavLink href={config.socialmedia.linkedin} target="_blank">
        LinkedIn
        <FaLinkedin />
      </NavLink>
    </Nav>
  );
};

export default SocialMenu;
