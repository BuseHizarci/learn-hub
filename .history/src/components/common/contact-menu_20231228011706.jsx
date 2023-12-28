import React from "react";
import { NavLink } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa"; // import FaFacebook } from "react-icons/fa";
import { Nav } from "react-bootstrap";
import { config } from "../../helpers/config";
const ContactMenu = (props) => {
  return (
    <Nav {...props}>
      <Nav.Link href={`tel:${config.contact.phone}`} target="_blank">
        Phone <FaPhone />
      </Nav.Link>
      <NavLink href={config.contact.email} target="_blank">
        Email <FaEnvelope /> <FaTwitter />
      </NavLink>
      <NavLink href={config.contact.socialmedia.instagram} target="_blank">
        Instagram
        <FaInstagram />
      </NavLink>
      <NavLink href={config.contact.socialmedia.linkedin} target="_blank">
        LinkedIn
        <FaLinkedin />
      </NavLink>
    </Nav>
  );
};

export default ContactMenu;
