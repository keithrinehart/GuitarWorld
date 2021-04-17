import React, { useState } from "react";
import Banner5 from "../components/banners/banner5";
import GibCard from "../pages/gibsonInfo";
import Header from "../components/header";
import "../css/ibanez.css";
import NavBar from "../pages/navbar/ibaneznav";
import IbanezLogo from "../img/ibanez-logo.png";
import Image1 from "../img/ibanez-s.png";
import Image2 from "../img/ibanez-rg.png";
import Image3 from "../img/ibanez-rg-premium.png";
import Image4 from "../img/ibanez-gio.png";
import Image5 from "../img/ibanez-7string-rg.png";
import Image6 from "../img/ibanez-grg140.png";
import BackBtn from "../components/backbtn";
import Footer from "../components/footers/footer6";

function Ibanez() {
  const [active, setActive] = useState("");

  return (
    <div id="ibanez-container" className="ibanez-container">
      <NavBar />
      <Header />

      <div className="header-ibanez">
        <h3 className="ibanez-h3-head">1946 ~ 2021</h3>
        <img className="nez-logo" src={IbanezLogo} alt="" />
      </div>
      <div className="ibanez-flex">
        <Banner5 heading="Pure Metal" />
        <div className="nez-container">
          <img
            className="nez-img1"
            src={Image1}
            style={{
              filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="160px"
          />
          <h3 className="nez-header nez-header-img1">Ibanez S Series</h3>
          <p id="nez-p-img1" className="nez-p-1">
            The Ibanez Saber S series was introduced for the 1987 model year,
            around the same time as the Ibanez RG. It is was known for its sleek
            body.
          </p>
          <button
            onClick={() => setActive("FirstCard")}
            onBlur={() => setActive("")}
            className="nez-btn"
            id="nez-btn1"
          >
            More Info
          </button>
          {active === "FirstCard" && (
            <GibCard
              title="Ibanez S Series"
              info="The S series is the original Saber shape, with carved back and top. Originally, they were equipped with Edge and Lo-TRS series double locking tremolos, depending on the model. The S series uses a Zero-Resistance (ZR) double locking tremolo system from 2003 till 2014. The ZR tremolo system uses ball-bearings as opposed to knife edges for pivot points and a built-in counter-tension system called the Zero Point System. The Zero Point System can be removed to change the tremolo to full-floating operation. "
            />
          )}
        </div>

        <div className="nez-container nez-container-2">
          <img
            className="nez-img2"
            src={Image2}
            style={{
              filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="159.8px"
          />
          <h3 className="nez-header">Ibanez RG Series</h3>
          <p id="nez-p-img2" className="nez-p-1">
            The Ibanez RG was originally designed in 1987, the same year as
            Steve Vai's signature guitar, and was received as a derivative of
            Vai's model back then.
          </p>
          <button
            onClick={() => setActive("SecondCard")}
            onBlur={() => setActive("")}
            className="nez-btn"
            id="nez-btn2"
          >
            More Info
          </button>
          {active === "SecondCard" && (
            <GibCard
              title="Ibanez RG Series"
              info="It rose in popularity throughout the 1980s and had the features that musicians in the rising shred and thrash metal movements of that time were looking for: a fast neck, comfortable body, powerful pickups, and a reliable tremolo system. The RG series has the most subtypes of any Ibanez model and is the most popular series of Ibanez electric guitars produced by Hoshino Gakki. The RG's deep cutaway, flatter fingerboard and extended fret range (24 frets as standard) has made it one of the most popular guitars for rock and heavy metal music. "
            />
          )}
        </div>
        <div className="nez-container nez-container-3">
          <img
            className="nez-img3"
            src={Image3}
            style={{
              filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="143.8px"
          />
          <h3 className="nez-header">Ibanez RG Premium</h3>
          <p id="nez-p-img3" className="nez-p-1">
            The Premium line are Mid-tier guitars produced in a special facility
            set up in Indonesia. The Premium line started in 2010 and sits above
            the "standard" RGs.
          </p>
          <button
            onClick={() => setActive("ThirdCard")}
            onBlur={() => setActive("")}
            className="nez-btn"
            id="nez-btn3"
          >
            More Info
          </button>
          {active === "ThirdCard" && (
            <GibCard
              title="Ibanez RG Premium"
              info="Although the premium stands above the RG series it sits below the Prestige series. Some recent (as of 2017) Premium models have upscale features not offered in the Prestige line such as stainless steel frets and necks laminated from eleven pieces of wood."
            />
          )}
        </div>
      </div>
      {/****************CONTAINER2*******************/}
      {/****************CONTAINER2*******************/}
      {/****************CONTAINER2*******************/}
      {/****************CONTAINER2*******************/}
      {/****************CONTAINER2*******************/}
      <div className="ibanez-column-2">
        <div className="nez-container">
          <img
            className="nez-img4"
            src={Image4}
            style={{
              filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="140px"
          />
          <h3 className="nez-header nez-header-2">Ibanez GIO</h3>
          <p id="nez-p-img4" className="nez-p-1 nez-p-img4">
            The Ibanez GIO Series is an affordable guitar series produced by
            Hoshino Gakki , replacing the Cimar line. The GIO guitars are a
            "first step" model line.
          </p>
          <button
            onClick={() => setActive("FourthCard")}
            onBlur={() => setActive("")}
            className="nez-btn"
            id="nez-btn4"
          >
            More Info
          </button>
          {active === "FourthCard" && (
            <GibCard
              title="Ibanez GIO"
              info="These are produced as fully Ibanez branded, with a GIO logo above the standard Ibanez logo to indicate the series. This series of guitars were produced in either China or Indonesia, depending on model. "
            />
          )}
        </div>
        <div className="nez-container nez-container2-2">
          <img
            className="nez-img5"
            src={Image5}
            style={{
              filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="146px"
          />
          <h3 className="nez-header nez-header-2 nez-header-img5">
            Ibanez RG 7String
          </h3>
          <p id="nez-p-img5" className="nez-p-1 nez-p-img5">
            Ibanez re-introduced the Ibanez S 7 string due to popular demand in
            2007. A similar model had been discontinued and 7 string models were
            left to the RG series.
          </p>
          <button
            onClick={() => setActive("FifthCard")}
            onBlur={() => setActive("")}
            className="nez-btn"
            id="nez-btn5"
          >
            More Info
          </button>
          {active === "FifthCard" && (
            <GibCard
              title="Ibanez RG 7String"
              info="The first in the series, the S7320 sported all the same basic features as the non-Prestige models of the S Series (22 frets, Wizard-II neck, thin contoured mahogany body, ZR tremolo, jumbo frets) but had a different pickup configuration consisting of 2 Ibanez Axis Humbuckers, the AH1 and AH2, no middle pickup, but a 5 way selector giving the user the choice of Bridge, Bridge and neck split coils in parallel, Bridge and Neck humbuckers in parallel, Neck in parallel, and Neck, giving a wide array of tonal variations."
            />
          )}
        </div>
        <div className="nez-container nez-container2-3">
          <img
            className="nez-img6"
            src={Image6}
            style={{
              filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="155.2px"
          />
          <h3 className="nez-header nez-header-2 nez-header-img6">
            Ibanez GRG140
          </h3>
          <p id="nez-p-img6" className="nez-p-1 nez-p-img6">
            This model was available exclusive in the European market through
            2018; for 2019 it was rolled out to the North & South America and
            Oceania market.
          </p>
          <button
            onClick={() => setActive("SixthCard")}
            onBlur={() => setActive("")}
            className="nez-btn"
            id="nez-btn6"
          >
            More Info
          </button>
          {active === "SixthCard" && (
            <GibCard
              title="Ibanez GRG140"
              info="The GRG140 is an RG series solid body electric guitar model introduced by Ibanez in 2012. It is part of the entry-level GIO line which is produced in Indonesia. The GRG140 features a non-locking synchronized tremolo bridge and Ibanez pickups in an HSS configuration. The parts specifications where significantly changed in 2013 and again in 2015. "
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

export default Ibanez;
