import React from "react";
import "../footerstyle/footer5.css";
import Header from "../header";

function footer5() {
  return (
    <div className="footer5-wrapper">
      <div className="footer5-container">
        <Header />
      </div>
      <p className="footer5-p">&copy;KeithRinehart.Inc</p>
      <div className="footer5-link-row">
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
      <a className="footer5-a" href="#jackson-container">
        <i className="fas fa-arrow-alt-circle-up footer-arrow"></i>
      </a>
    </div>
  );
}

export default footer5;
