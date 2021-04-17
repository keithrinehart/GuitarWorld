import React from "react";
import "../bannerstyle/banner3.css";

const banner3 = ({ heading }) => {
  return (
    <div className="banner3-wrap">
      <div className="banner3-line1"></div>
      <h3 className="banner3-heading">{heading}</h3>
      <div className="banner3-line2"></div>
    </div>
  );
};

export default banner3;
