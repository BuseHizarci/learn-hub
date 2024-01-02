import React from "react";
import PageHeader from "../components/common/page-header";
import Spacer from "../components/common/spacer";
import Contact from "../components/contact/index";
const ContactPage = () => {
  return (
    <div>
      <PageHeader title="Contact Us" />
      <Spacer />
      <Contact />
    </div>
  );
};

export default ContactPage;
