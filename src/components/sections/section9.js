import React from "react";
import Jackson from "/reactapps/guitarworld/src/img/jackson-dinky-js32.png";
import { Link } from "react-router-dom";
import "../sectionstyle/section9.css";

function section9() {
  return (
    <div id="section9container" className="section9-container">
      <section className="section9">
        <p className="section9-p">
          Jackson is a manufacturer of electric guitars and electric bass
          guitars that bears the name of its founder, Grover Jackson. Jackson
          Guitars originated in 1980 when guitarist Randy Rhoads approached the
          company with an idea for an individualized guitar.
        </p>
        <Link to="/jackson">
          <button id="section9btn">View Jacksons</button>
        </Link>
      </section>
      <img className="jackson" src={Jackson} alt=" black jackson guitar" />
    </div>
  );
}

export default section9;
