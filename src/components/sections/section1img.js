import React from "react";
import Img1Sec1 from "/reactapps/guitarworld/src/img/fender-full.png";
import Img2Sec1 from "/reactapps/guitarworld/src/img/epiphone-330.png";
import Img3Sec1 from "/reactapps/guitarworld/src/img/ibanez-grg140.png";
import Img4Sec1 from "/reactapps/guitarworld/src/img/gib-es175.png";
import Img5Sec1 from "/reactapps/guitarworld/src/img/jackson-dinky-js32.png";
import Img6Sec1 from "/reactapps/guitarworld/src/img/fender-tel.png";
import Img7Sec1 from "/reactapps/guitarworld/src/img/epiphone-blueshawk.png";
import Img8Sec1 from "/reactapps/guitarworld/src/img/ibanez-rg-premium.png";
import Img9Sec1 from "/reactapps/guitarworld/src/img/gib-es345.png";
import "../sectionstyle/section1img.css";

function section1img() {
  return (
    <div className="img-section1-wrap">
      <h2 className="img-section-h2">The Top Brands</h2>
      <img id="img-sec-guit1" className="img-spacing" src={Img1Sec1} alt="" />
      <img id="img-sec-guit2" className="img-spacing" src={Img2Sec1} alt="" />
      <img id="img-sec-guit3" className="img-spacing" src={Img3Sec1} alt="" />
      <img id="img-sec-guit4" className="img-spacing" src={Img4Sec1} alt="" />
      <img id="img-sec-guit5" className="img-spacing" src={Img5Sec1} alt="" />
      <img id="img-sec-guit6" className="img-spacing" src={Img6Sec1} alt="" />
      <img id="img-sec-guit7" className="img-spacing" src={Img7Sec1} alt="" />
      <img id="img-sec-guit8" className="img-spacing" src={Img8Sec1} alt="" />
      <img id="img-sec-guit9" className="img-spacing" src={Img9Sec1} alt="" />
    </div>
  );
}

export default section1img;
