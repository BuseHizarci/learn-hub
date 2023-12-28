import React from "react";
import { NavLink } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaAddressBook,
  FaMap,
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
       <FaEnvelope /> Email 
      </NavLink>
      <NavLink href={config.contact.address} target="_blank">
        Adress <FaAddressBook />
      </NavLink>
      <NavLink href={config.contact.mapUrl} target="_blank">
        Map <FaMap />
      </NavLink>
    </Nav>
  );
};

export default ContactMenu;
