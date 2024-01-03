import React from "react";
import PageHeader from "../components/common/page-header";
import Spacer from "../components/common/spacer";
import Contact from "../components/contact/index";
import GetInTouch from "../components/contact/get-in-touch";
const ContactPage = () => {
  return (
    <div>
      <PageHeader title="Contact Us" />
      <Spacer />
      <Contact />
      <Spacer />
    </div>
  );
};

export default ContactPage;
