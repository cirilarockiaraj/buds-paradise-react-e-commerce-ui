import React from "react";
import "./Banner.css";

const Banner = ({bannerImage}) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="banner-content">
        <h1>Feel the Music Everywhare</h1>
        <p>Premium Earphones & Buds for a better sound experience</p>
        <button>
          Shop Now <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Banner;
