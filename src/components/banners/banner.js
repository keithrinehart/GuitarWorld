import React from "react";
import "../bannerstyle/banner.css";

const banner = ({ heading }) => {
  return (
    <div className="banner-wrap">
      <div className="banner-line1"></div>
      <h3 className="banner-heading">{heading}</h3>
      <div className="banner-line2"></div>
    </div>
  );
};

export default banner;
