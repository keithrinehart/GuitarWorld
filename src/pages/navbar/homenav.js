import React from "react";
import "../navstyle/homenav.css";

function Homenav() {
  return (
    <div className="home-nav-wrap ">
      <p className="nav-updown">UP</p>
      <div className="nav-string"></div>
      {/*Search*/}
      <a className="home-a" href="#home">
        <div className="swrap wrap">
          <p className="slink homelinks">
            <i className="fas fa-home"></i>
          </p>
          <div className="home-link-container pop-container">
            <p className="home-link-p pop-p">Home</p>
          </div>
        </div>
      </a>
      {/*Gibson Section*/}
      <a className="gibson-a" href="#gibson-nav-link">
        <div className="gwrap wrap">
          <p className="glink homelinks">G</p>
          <div className="gibson-link-container pop-container">
            <p className="gibson-link-p pop-p">Gibson</p>
          </div>
        </div>
      </a>
      {/*Fender Section*/}
      <a className="fender-a" href="#fender-nav-link">
        <div className="fwrap wrap">
          <p className="flink homelinks">F</p>
          <div className="fender-link-container pop-container">
            <p className="fender-link-p pop-p">Fender</p>
          </div>
        </div>
      </a>
      {/*Epiphone Section*/}
      <a className="epiphone-a" href="#epiphone-nav-link">
        <div className="ewrap wrap">
          <p className="elink homelinks">E</p>
          <div className="epiphone-link-container pop-container">
            <p className="epiphone-link-p pop-p">Epiphone</p>
          </div>
        </div>
      </a>
      {/*Jackson Section*/}
      <a className="jackson-a" href="#section9container">
        <div className="jwrap wrap">
          <p className="jlink homelinks">J</p>
          <div className="jackson-link-container pop-container">
            <p className="jackson-link-p pop-p">Jackson</p>
          </div>
        </div>
      </a>
      {/*Ibanez Section*/}
      <a className="ibanez-a" href="#ibanez-nav-link">
        <div className="iwrap wrap">
          <p className="ilink homelinks">I</p>
          <div className="ibanez-link-container pop-container">
            <p className="ibanez-link-p pop-p">Ibanez</p>
          </div>
        </div>
      </a>
      <p className="nav-updown">DOWN</p>
    </div>
  );
}

export default Homenav;
