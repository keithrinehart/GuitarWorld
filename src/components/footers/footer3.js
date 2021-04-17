import React from "react";
import "../footerstyle/footer3.css";
import Header from "../header";

function footer3() {
  return (
    <div className="footer3-wrapper">
      <div className="footer3-container">
        <Header />
      </div>
      <p className="footer3-p">&copy;KeithRinehart.Inc</p>
      <div className="footer3-link-row">
        <a
          href="https://github.com/keithrinehart"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github-square"></i>
        </a>
        <a
          href=" https://www.linkedin.com/in/keith-rinehart"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <a className="footer3-a" href="#fender-container">
        <i className="fas fa-arrow-alt-circle-up footer-arrow"></i>
      </a>
    </div>
  );
}

export default footer3;
