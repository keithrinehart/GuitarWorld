import React from "react";
import "../bannerstyle/banner5.css";

const banner5 = ({ heading }) => {
  return (
    <div className="banner5-wrap">
      <div className="banner5-line1"></div>
      <h3 className="banner5-heading">{heading}</h3>
      <div className="banner5-line2"></div>
    </div>
  );
};

export default banner5;
