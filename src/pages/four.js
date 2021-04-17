import React from "react";
import "../css/404.css";
import { Link } from "react-router-dom";

function four() {
  return (
    <div className="four-container">
      <h1 className="four04-h1">404</h1>
      <p className="four-p">
        Something must have went wrong or we simply do not have any information
        on that guitar
      </p>
      <h3 className="four-h3">Sorry. Click the button to return home</h3>
      <Link to="/">
        <button className="four-btn">Return Home</button>
      </Link>
    </div>
  );
}

export default four;
