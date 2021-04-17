import React from "react";
import "../bannerstyle/banner4.css";

const banner4 = ({ heading }) => {
  return (
    <div className="banner4-wrap">
      <div className="banner4-line1"></div>
      <h3 className="banner4-heading">{heading}</h3>
      <div className="banner4-line2"></div>
    </div>
  );
};

export default banner4;
