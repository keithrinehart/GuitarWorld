import React from "react";
import Picklogo from "../img/guitarpick.png";
import "../css/header.css";

function header() {
  return (
    <header id="header" className="App-header">
      <div className="h1container">
        <img className="pick" src={Picklogo} alt="guitar pick" width="100px" />
        <h1 className="header-h1">
          Guitars<span>World</span>
        </h1>
      </div>
    </header>
  );
}

export default header;
