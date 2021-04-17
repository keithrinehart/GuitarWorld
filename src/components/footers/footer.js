import React from "react";
import "../footerstyle/footer.css";
import Header from "../header";

function footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <Header />
      </div>
      <p className="footer-p">&copy;KeithRinehart.Inc</p>
      <div className="footer-link-row">
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
      <a className="footer-a" href="#header-wrap">
        <i className="fas fa-arrow-alt-circle-up footer-arrow"></i>
      </a>
    </div>
  );
}

export default footer;
