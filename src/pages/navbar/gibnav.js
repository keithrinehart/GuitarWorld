import React from "react";
import { Link } from "react-router-dom";
import "../navstyle/gibnav.css";

function gibnav() {
  return (
    <div id="gibnav" className="gib-home-nav-wrap ">
      <div className="gib-nav-string"></div>
      {/*Search*/}
      <Link to="/GuitarWorld/">
        <div className="gib-swrap gib-wrap">
          <p className="gib-slink homelinks">
            <i className="fas fa-home"></i>
          </p>
        </div>
      </Link>
      {/*Fender Section*/}
      <Link to="/fender">
        <div className="gib-fwrap gib-wrap">
          <p className="gib-flink homelinks">F</p>
        </div>
      </Link>
      {/*Epiphone Section*/}
      <Link to="/epiphone">
        <div className="gib-ewrap gib-wrap">
          <p className="gib-elink homelinks">E</p>
        </div>
      </Link>
      {/*Jackson Section*/}
      <Link to="/jackson">
        <div className="gib-jwrap gib-wrap">
          <p className="gib-jlink homelinks">J</p>
        </div>
      </Link>
      {/*Ibanez Section*/}
      <Link to="/ibanez">
        <div className="gib-iwrap gib-wrap">
          <p className="gib-ilink homelinks">I</p>
        </div>
      </Link>
    </div>
  );
}

export default gibnav;
