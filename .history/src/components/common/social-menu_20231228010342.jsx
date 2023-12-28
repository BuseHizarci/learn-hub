import React from "react";

const SocialMenu = () => {
  return (
    <Nav {...props}>
      <Nav.Link href={config.socialmedia.facebook} to="/homepage">
        Facebook{" "}
      </Nav.Link>
      
    </Nav>
  );
};

export default SocialMenu;
