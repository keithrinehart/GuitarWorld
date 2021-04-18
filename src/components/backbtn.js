import React from "react";
import { Link } from "react-router-dom";
import "../css/gibson.css";

function backbtn() {
  return (
    <div>
      <Link to="/GuitarWorld" style={{ textDecoration: "none" }}>
        <button className="gibson-back-btn">Back</button>
      </Link>
    </div>
  );
}

export default backbtn;
