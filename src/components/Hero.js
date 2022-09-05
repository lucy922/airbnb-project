import React from "react";
import image from "../asset/images/photo-collage-girl.png";

function Hero() {
  return (
    <div className="wrapper">
      <div className="hero-img">
        <img src={image} alt="thumbnail" className="img" />
      </div>
      <div className="para">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
export default Hero;
