import React, { useState } from "react";
import Banner2 from "../components/banners/banner2";
import GibCard from "../pages/gibsonInfo";
import Header from "../components/header";
import "../css/fender.css";
import NavBar from "../pages/navbar/fennav";
import FenderLogo from "../img/fender-logo.png";
import Image1 from "../img/fender-full.png";
import Image2 from "../img/fender-res.png";
import Image3 from "../img/fender-tel.png";
import Image4 from "../img/fender-mini.png";
import Image5 from "../img/fender-jazzbass.png";
import Image6 from "../img/fender-acoustic.png";
import BackBtn from "../components/backbtn";
import Footer from "../components/footers/footer3";

function Fender() {
  const [active, setActive] = useState("");

  return (
    <div id="fender-container" className="fender-container">
      <NavBar />
      <Header />

      <div className="header-fender">
        <h3 className="fender-h3-head">1946 ~ 2021</h3>
        <img className="gib-logo" src={FenderLogo} alt="" />
      </div>
      <div className="fender-flex">
        <Banner2 heading="Absolute Classics" />
        <div className="fen-container">
          <img
            className="fen-img1"
            src={Image1}
            style={{
              filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="151px"
          />
          <h3 className="fen-header">Fender Stratocaster</h3>
          <p id="fen-p-1" className="fen-p-1">
            During this time, vintage instruments from the pre-CBS era became
            popular like the Stratocaster and many more fender productss.
          </p>
          <button
            onClick={() => setActive("FirstCard")}
            onBlur={() => setActive("")}
            className="fen-btn"
            id="fen-btn1"
          >
            More Info
          </button>
          {active === "FirstCard" && (
            <GibCard
              title="Fender Stratocaster"
              info="The archetypical Stratocaster is a solid-body electric guitar with a contoured asymmetric double-cutaway body with an extended upper horn; the body is usually made from alder or ash. The neck is usually made from maple and attached to the body with screws (often referred to as bolts) and has a distinctive headstock with six tuning pegs mounted inline along a single side; the fingerboard may be maple or another wood, e.g. rosewood, and has at least twenty-one frets. "
            />
          )}
        </div>

        <div className="fen-container fen-container-2">
          <img
            className="fen-img2"
            src={Image2}
            style={{ filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))" }}
            alt=""
            width="171px"
          />
          <h3 className="fen-header">Fender Stratocaster OS</h3>
          <p id="fen-p-2" className="fen-p-1">
            There have been some minor changes to the design over the years.
            However, the essential character of the design has remained
            constant.
          </p>
          <button
            onClick={() => setActive("SecondCard")}
            onBlur={() => setActive("")}
            className="fen-btn"
            id="fen-btn2"
          >
            More Info
          </button>
          {active === "SecondCard" && (
            <GibCard
              title="Fender Stratocaster Old School"
              info="The Stratocaster's body is front-routed for electronics, which are mounted in a plastic pickguard. Most Stratocasters have three single-coil pickups, a pickup selector switch, one volume control and two tone controls. Pivoting tremolo bridges are common, balanced by springs mounted in a rear cavity, and the bridge has six individually adjustable saddles whose height and intonation can be set independently."
            />
          )}
        </div>
        <div className="fen-container fen-container-3">
          <img
            className="fen-img3"
            src={Image3}
            style={{ filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))" }}
            alt=""
            width="153px"
          />
          <h3 className="fen-header">Fender Telecaster</h3>
          <p id="fen-p-3" className="fen-p-1">
            The Fender Telecaster, colloquially known as the Tele /ˈtɛli/, is
            the world's first commercially successful solid-body electric
            guitar.
          </p>
          <button
            onClick={() => setActive("ThirdCard")}
            onBlur={() => setActive("")}
            className="fen-btn"
            id="fen-btn3"
          >
            More Info
          </button>
          {active === "ThirdCard" && (
            <GibCard
              title="Fender Telecaster"
              info="The archetypical Fender Telecaster is a solid-body electric guitar with a flat asymmetric single-cutaway body; the body is usually made from alder or ash. The neck is usually made from maple and attached to the body with screws (often referred to as bolts) and has a distinctive small headstock with six tuning pegs mounted inline along a single side; the fingerboard may be maple or another wood."
            />
          )}
        </div>
      </div>
      {/****************CONTAINER2*******************/}
      {/****************CONTAINER2*******************/}
      {/****************CONTAINER2*******************/}
      {/****************CONTAINER2*******************/}
      {/****************CONTAINER2*******************/}
      <div className="fender-column-2">
        <div className="fen-container">
          <img
            className="fen-img4"
            src={Image4}
            style={{ filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))" }}
            alt=""
            width="128px"
          />
          <h3 className="fen-header fen-header-2">Fender Squier Mini</h3>
          <p id="fen-p-4" className="fen-p-1">
            The Mini is the 3/4-size version (22.75" scale length) of the Bullet
            and makes an ideal travel guitar for all ages and beginners.
          </p>
          <button
            onClick={() => setActive("FourthCard")}
            onBlur={() => setActive("")}
            className="fen-btn"
            id="fen-btn4"
          >
            More Info
          </button>
          {active === "FourthCard" && (
            <GibCard
              title="Fender Squier Mini Strat"
              info="The ideal guitar for beginners. Not only is it affordable but it makes great for a gift (not to mention its affordable) and it wont empty your pockets just in case you or the recipient doesn't want to learn/play guitar. Your covered!"
            />
          )}
        </div>
        <div className="fen-container fen-container2-2">
          <img
            className="fen-img5"
            src={Image5}
            style={{ filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))" }}
            alt=""
            width="120px"
          />
          <h3 className="fen-header fen-header-2">Fender Jazz Bass</h3>
          <p id="fen-p-5" className="fen-p-1">
            The Fender Jazz Bass is the second model of electric bass created by
            Leo Fender and was first introduced in 1960.
          </p>
          <button
            onClick={() => setActive("FifthCard")}
            onBlur={() => setActive("")}
            className="fen-btn"
            id="fen-btn5"
          >
            More Info
          </button>
          {active === "FifthCard" && (
            <GibCard
              title="Fender Jazz Bass"
              info="The Jazz Bass has a bright sound, with more high end than the Precision Bass. This makes it ideal for slap playing as well as finger-style players. This bright sound is because of the two pickups at different points in the string's length. The bridge pickup gives a tone with more treble, while the neck pickup will yield a rounder sound."
            />
          )}
        </div>
        <div className="fen-container fen-container2-3">
          <img
            className="fen-img6"
            src={Image6}
            style={{ filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))" }}
            alt=""
            width="161px"
          />
          <h3 className="fen-header fen-header-2">Fender Acoustic</h3>
          <p id="fen-p-6" className="fen-p-1">
            Fender’s rich acoustic guitar history dates back to the early 1960s,
            from Johnny Cash to Elvis Presley. The Fender acoustic lives on.
          </p>
          <button
            onClick={() => setActive("SixthCard")}
            onBlur={() => setActive("")}
            className="fen-btn"
            id="fen-btn6"
          >
            More Info
          </button>
          {active === "SixthCard" && (
            <GibCard
              title="Fender Acoustic"
              info="In all, Fender boasts a comprehensive family of acoustic models, with everything from full-size dreadnought and jumbo guitars to orchestra, concert and parlor-size models; from nylon-string classical guitars to long-scale acoustic basses but as always, Fender acoustic guitars continue to evoke the sun and fun of their ’60s-era Southern California ancestry, delivering great sound and value and ensuring a truly resonant future."
            />
          )}
        </div>
      </div>
      <BackBtn />
      <div className="footer-width">
        <Footer />
      </div>
    </div>
  );
}

export default Fender;
