import React from "react";
import "../footerstyle/footer4.css";
import Header from "../header";

function footer4() {
  return (
    <div className="footer4-wrapper">
      <div className="footer4-container">
        <Header />
      </div>
      <p className="footer4-p">&copy;KeithRinehart.Inc</p>
      <div className="footer4-link-row">
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
      <a className="footer4-a" href="#epiphone-container">
        <i className="fas fa-arrow-alt-circle-up footer-arrow"></i>
      </a>
    </div>
  );
}

export default footer4;
