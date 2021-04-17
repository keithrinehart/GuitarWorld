import React from "react";
import "../footerstyle/footer2.css";
import Header from "../header";

function footer2() {
  return (
    <div className="footer2-wrapper">
      <div className="footer2-container">
        <Header />
      </div>
      <p className="footer2-p">&copy;KeithRinehart.Inc</p>
      <div className="footer2-link-row">
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
      <a className="footer2-a" href="#gibnav">
        <i className="fas fa-arrow-alt-circle-up footer-arrow"></i>
      </a>
    </div>
  );
}

export default footer2;
