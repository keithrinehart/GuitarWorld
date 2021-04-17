import React from "react";
import "../footerstyle/footer6.css";
import Header from "../header";

function footer6() {
  return (
    <div className="footer6-wrapper">
      <div className="footer6-container">
        <Header />
      </div>
      <p className="footer6-p">&copy;KeithRinehart.Inc</p>
      <div className="footer6-link-row">
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
      <a className="footer6-a" href="#ibanez-container">
        <i className="fas fa-arrow-alt-circle-up footer-arrow"></i>
      </a>
    </div>
  );
}

export default footer6;
