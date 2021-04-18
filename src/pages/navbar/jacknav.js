import React from "react";
import { Link } from "react-router-dom";
import "../navstyle/jacknav.css";

function jacknav() {
  return (
    <div id="jacknav" className="jack-home-nav-wrap ">
      <div className="jack-nav-string"></div>
      {/*Search*/}
      <Link to="/GuitarWorld/">
        <div className="jack-swrap jack-wrap">
          <p className="jack-slink homelinks">
            <i className="fas fa-home"></i>
          </p>
        </div>
      </Link>
      {/*Gibson Section*/}
      <Link to="/gibson">
        <div className="jack-gwrap jack-wrap">
          <p className="jack-glink homelinks">G</p>
        </div>
      </Link>
      {/*Fender Section*/}
      <Link to="/fender">
        <div className="jack-fwrap jack-wrap">
          <p className="jack-flink homelinks">F</p>
        </div>
      </Link>
      {/*Epiphone Section*/}
      <Link to="/epiphone">
        <div className="jack-ewrap jack-wrap">
          <p className="jack-elink homelinks">E</p>
        </div>
      </Link>
      {/*Ibanez Section*/}
      <Link to="/ibanez">
        <div className="jack-iwrap jack-wrap">
          <p className="jack-ilink homelinks">I</p>
        </div>
      </Link>
    </div>
  );
}

export default jacknav;
