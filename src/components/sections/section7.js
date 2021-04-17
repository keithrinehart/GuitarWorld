import React from "react";
import epiphone from "/reactapps/guitarworld/src/img/epiphone-blueshawk.png";
import { Link } from "react-router-dom";
import "../sectionstyle/section7.css";

function section7() {
  return (
    <div id="epiphone-nav-link" className="section7-container">
      <section className="section7">
        <img className="epiphone" src={epiphone} alt=" blue Epiphone guitar" />
        <p className="section7-p">
          Epiphone is an American musical instrument brand. It traces its roots
          to a musical instrument manufacturing business founded in 1873 by
          Anastasios Stathopoulos in Smyrna, Ottoman Empire and moved to New
          York City in 1908.
        </p>
        <Link to="/epiphone">
          <button className="section7-btn">View Epiphones</button>
        </Link>
      </section>
      <img className="epiphone2" src={epiphone} alt=" blue Epiphone guitar" />
    </div>
  );
}

export default section7;
