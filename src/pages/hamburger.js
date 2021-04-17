import React, { useState } from "react";
import OpenNav from "../pages/navbar/homenav";
import "./hamburgerstyle/hamburger.css";

function Hamburger() {
  const [show, setShow] = useState(false);
  return (
    <div className="menu-container" onClick={() => setShow(!show)}>
      <div className="line"></div>
      <div className="line line2"></div>
      <div className="line line3"></div>
      {show ? <OpenNav /> : null}
    </div>
  );
}

export default Hamburger;
