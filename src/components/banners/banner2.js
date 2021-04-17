import React from "react";
import "../bannerstyle/banner2.css";

const banner2 = ({ heading }) => {
  return (
    <div className="banner2-wrap">
      <div className="banner2-line1"></div>
      <h3 className="banner2-heading">{heading}</h3>
      <div className="banner2-line2"></div>
    </div>
  );
};

export default banner2;
