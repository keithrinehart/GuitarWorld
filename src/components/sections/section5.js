import React from "react";
import Fender from "/reactapps/guitarworld/src/img/fender-full.png";
import { Link } from "react-router-dom";
import "../sectionstyle/section5.css";

function section5() {
  return (
    <div id="fender-nav-link" className="section5-container">
      <section className="section5">
        <p className="section5-p">
          The Fender Stratocaster, colloquially known as the Strat, is a model
          of electric guitar designed from 1952 into 1954 by Leo Fender, Bill
          Carson, George Fullerton and Freddie Tavares. The Fender Musical
          Instruments Corporation has continuously manufactured the Stratocaster
          from 1954 to the present.
        </p>
        <Link to="/fender">
          <button className="section5-btn">View Fenders</button>
        </Link>
      </section>
      <img className="fender-img" src={Fender} alt="" width="350px" />
    </div>
  );
}

export default section5;
