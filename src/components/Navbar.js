import React from "react";
import image from "../asset/images/Airbnb-logo.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav">
        <img src={image} width="100px" alt="thumbnail" />
      </div>
    </div>
  );
}

export default Navbar;
