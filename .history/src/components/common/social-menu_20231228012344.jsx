import React from "react";
import { NavLink } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // import FaFacebook } from "react-icons/fa";
import { Nav } from "react-bootstrap";
import { config } from "../../helpers/config";
const SocialMenu = (props) => {
  return (
    <Nav {...props} className="flex-column mb-auto">
      <Nav.Link href={config.contact.socialmedia.facebook} target="_blank">
        <FaFacebook />
        Facebook
      </Nav.Link>
      <NavLink href={config.contact.socialmedia.twitter} target="_blank">
        <FaTwitter />
        Twitter
      </NavLink>
      <NavLink href={config.contact.socialmedia.instagram} target="_blank">
        <FaInstagram />
        Instagram
      </NavLink>
      <NavLink href={config.contact.socialmedia.linkedin} target="_blank">
        <FaLinkedin />
        LinkedIn
      </NavLink>
    </Nav>
  );
};

export default SocialMenu;
