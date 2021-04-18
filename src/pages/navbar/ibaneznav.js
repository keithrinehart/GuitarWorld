import React from "react";
import { Link } from "react-router-dom";
import "../navstyle/ibaneznav.css";

function ibaneznav() {
  return (
    <div id="ibaneznav" className="ibanez-home-nav-wrap ">
      <div className="ibanez-nav-string"></div>
      {/*Search*/}
      <Link to="/GuitarWorld/">
        <div className="ibanez-swrap ibanez-wrap">
          <p className="ibanez-slink homelinks">
            <i className="fas fa-home"></i>
          </p>
        </div>
      </Link>
      {/*Gibson Section*/}
      <Link to="/gibson">
        <div className="ibanez-gwrap ibanez-wrap">
          <p className="ibanez-glink homelinks">G</p>
        </div>
      </Link>
      {/*Fender Section*/}
      <Link to="/fender">
        <div className="ibanez-fwrap ibanez-wrap">
          <p className="ibanez-flink homelinks">F</p>
        </div>
      </Link>
      {/*Epiphone Section*/}
      <Link to="/epiphone">
        <div className="ibanez-ewrap ibanez-wrap">
          <p className="ibanez-elink homelinks">E</p>
        </div>
      </Link>
      {/*Jackson Section*/}
      <Link to="/jackson">
        <div className="ibanez-jwrap ibanez-wrap">
          <p className="ibanez-jlink homelinks">J</p>
        </div>
      </Link>
    </div>
  );
}

export default ibaneznav;
