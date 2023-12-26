import React from "react";
import Topbar from "../components/common/topbar";
import Menubar from "../components/common/menubar";
import Footer from "../components/common/footer";

const UserLayout = () => {
  return (
    <div>
      <Topbar />
      <Menubar />
      <Footer />
    </div>
  );
};

export default UserLayout;
