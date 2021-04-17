import React from "react";
import "../sectionstyle/section3.css";
import gibson from "/reactapps/guitarworld/src/img/gibson-full2.png";
import { Link } from "react-router-dom";

function section3() {
  return (
    <div id="gibson-nav-link" className="section3-container">
      <section className="section3">
        <img className="gibson" src={gibson} alt=" red Gibson guitar" />
        <p className="section3-p">
          The post-1954 Les Paul guitar line included two models: the Classic
          (nicknamed the Goldtop), and the Custom (which offered gold hardware
          and a more formal black finish). However, advancements in pickup,
          body, and hardware designs allowed the Les Paul to become a long-term
          series of electric solid-body guitars that targeted multiple
          price-points and market levels.
        </p>
        <Link to="/gibson">
          <button className="section3-btn">View Gibsons</button>
        </Link>
      </section>
    </div>
  );
}

export default section3;
