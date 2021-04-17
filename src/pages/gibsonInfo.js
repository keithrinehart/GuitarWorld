import React from "react";
import "../css/gibbtn.css";

const gibsonInfo = ({ title, info }) => {
  return (
    <div id="gibinfo" className="gibInfo gibInfo-row2">
      <h3 className="gib-info-h3">{title}</h3>
      <p className="gib-info-p">{info}</p>
    </div>
  );
};

export default gibsonInfo;
