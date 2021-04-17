import React from "react";
import { Link } from "react-router-dom";
import "../navstyle/fennav.css";

function gibnav() {
  return (
    <div id="fennav" className="fen-home-nav-wrap ">
      <div className="fen-nav-string"></div>
      {/*Search*/}
      <Link to="/">
        <div className="fen-swrap fen-wrap">
          <p className="fen-slink homelinks">
            <i className="fas fa-home"></i>
          </p>
        </div>
      </Link>
      {/*Gibson Section*/}
      <Link to="/gibson">
        <div className="fen-gwrap fen-wrap">
          <p className="fen-glink homelinks">G</p>
        </div>
      </Link>
      {/*Epiphone Section*/}
      <Link to="/epiphone">
        <div className="fen-ewrap fen-wrap">
          <p className="fen-elink homelinks">E</p>
        </div>
      </Link>
      {/*Jackson Section*/}
      <Link to="/jackson">
        <div className="fen-jwrap fen-wrap">
          <p className="fen-jlink homelinks">J</p>
        </div>
      </Link>
      {/*Ibanez Section*/}
      <Link to="/ibanez">
        <div className="fen-iwrap fen-wrap">
          <p className="fen-ilink homelinks">I</p>
        </div>
      </Link>
    </div>
  );
}

export default gibnav;
