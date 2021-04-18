import React from "react";
import { Link } from "react-router-dom";
import "../navstyle/epinav.css";

function epinav() {
  return (
    <div id="epinav" className="epi-home-nav-wrap ">
      <div className="epi-nav-string"></div>
      {/*Search*/}
      <Link to="/GuitarWorld/">
        <div className="epi-swrap epi-wrap">
          <p className="epi-slink homelinks">
            <i className="fas fa-home"></i>
          </p>
        </div>
      </Link>
      {/*Gibson Section*/}
      <Link to="/gibson">
        <div className="epi-gwrap epi-wrap">
          <p className="epi-glink homelinks">G</p>
        </div>
      </Link>
      {/*Fender Section*/}
      <Link to="/fender">
        <div className="epi-fwrap epi-wrap">
          <p className="epi-flink homelinks">F</p>
        </div>
      </Link>
      {/*Jackson Section*/}
      <Link to="/jackson">
        <div className="epi-jwrap epi-wrap">
          <p className="epi-jlink homelinks">J</p>
        </div>
      </Link>
      {/*Ibanez Section*/}
      <Link to="/ibanez">
        <div className="epi-iwrap epi-wrap">
          <p className="epi-ilink homelinks">I</p>
        </div>
      </Link>
    </div>
  );
}

export default epinav;
