import React, { useState } from "react";
import "../css/gibson.css";
import NavBar from "../pages/navbar/gibnav";
import Banner from "../components/banners/banner";
import GibCard from "../pages/gibsonInfo";
import Header from "../components/header";
import GibsonLogo from "../img/gibson-logo.png";
import Image1 from "../img/gibson-full2.png";
import Image2 from "../img/gibson-full.png";
import Image3 from "../img/gibson-group.png";
import Image4 from "../img/gib-es333.png";
import Image5 from "../img/gib-es175.png";
import Image6 from "../img/gib-es345.png";
import BackBtn from "../components/backbtn";
import Footer from "../components/footers/footer2";

function Gibson() {
  const [active, setActive] = useState("");

  return (
    <div id="gibson-container" className="gibson-container">
      <NavBar />
      <Header />

      <div className="header-gibson">
        <h3 className="gibson-h3-head">1902 ~ 2021</h3>
        <img className="gib-logo" src={GibsonLogo} alt="" />
      </div>
      <div className="gibson-flex">
        <Banner heading="State Of The Art" />

        <div className="gib-container">
          <img
            className="gib-img1"
            src={Image1}
            style={{
              filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="150px"
          />
          <h3 className="gib-header">Gibson Les Paul</h3>
          <p className="gib-p-1">
            Jimmy Page, Gary Moore, Slash, Joe Perry, Peter Frampton, Mike
            Bloomfield, Pete Townshend, Ace Frehley, Billy Gibbons, Eric
            Clapton, Paul Kossoff. Need i say more!
          </p>
          <button
            onClick={() => setActive("FirstCard")}
            onBlur={() => setActive("")}
            className="gib-btn"
            id="gib-btn1"
          >
            More Info
          </button>
          {active === "FirstCard" && (
            <GibCard
              title="Gibson Les Paul"
              info="The Gibson Les Paul is a solid body electric guitar that was first sold by the Gibson Guitar Corporation in 1952. The Les Paul was designed by Gibson president Ted McCarty, factory manager John Huis and their team with input from and endorsement by guitarist Les Paul. Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist. "
            />
          )}
        </div>

        <div className="gib-container gib-container-2">
          <img
            className="gib-img2"
            src={Image3}
            style={{
              filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="446px"
          />
          <h3 className="gib-header">Gibson Les Paul Junior</h3>
          <p className="gib-p-1">
            The goal for the Les Paul Jr. was to have a high-quality guitar that
            was still affordable. This was achieved by stripping the Gibson Les
            Paul down to the basics.
          </p>
          <button
            onClick={() => setActive("SecondCard")}
            onBlur={() => setActive("")}
            className="gib-btn"
            id="gib-btn2"
          >
            More Info
          </button>
          {active === "SecondCard" && (
            <GibCard
              title="Gibson Les Paul Junior"
              info="The Gibson Les Paul Jr. is a solid-body electric guitar introduced in 1954 as an affordable, entry-level Les Paul. It was first released with a single-cutaway body style; models with a double-cutaway body style were later introduced in 1958. The Jr. continued through the first three years of the Les Paul/SG body redesign. It was discontinued in 1963, and was not re-released until 2001."
            />
          )}
        </div>
        <div className="gib-container gib-container-3">
          <img
            className="gib-img3"
            src={Image2}
            style={{
              filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="159px"
          />
          <h3 className="gib-header">Gibson SG</h3>
          <p className="gib-p-1">
            The SG has a thinner, and more contoured body than the Les Paul,
            making it much lighter and more comfortable. It was designed to rock
            your face off.
          </p>
          <button
            onClick={() => setActive("ThirdCard")}
            onBlur={() => setActive("")}
            className="gib-btn"
            id="gib-btn3"
          >
            More Info
          </button>
          {active === "ThirdCard" && (
            <GibCard
              title="Gibson SG"
              info="The Gibson SG is a solid-body electric guitar model introduced by Gibson in 1961 as the Gibson Les Paul SG. It remains in production today in many variations of the initial design. The SG (where SG refers to Solid Guitar) Standard is Gibson's best-selling model of all time."
            />
          )}
        </div>
      </div>
      {/****************CONTAINER2*******************/}
      {/****************CONTAINER2*******************/}
      {/****************CONTAINER2*******************/}
      {/****************CONTAINER2*******************/}
      {/****************CONTAINER2*******************/}
      <div className="gibson-column-2">
        <div className="gib-container">
          <img
            className="gib-img4"
            src={Image4}
            style={{
              filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="180px"
          />
          <h3 id="gib-h3-img4" className="gib-header gib-header-2">
            Gibson ES-333
          </h3>
          <p className="gib-p-1 gib-p-img4">
            The Gibson Tom DeLonge Signature ES-333 is the signature guitar of
            Tom DeLonge, the guitarist of popular bands Blink-182 and Box Car
            Racer.
          </p>
          <button
            onClick={() => setActive("FourthCard")}
            onBlur={() => setActive("")}
            className="gib-btn"
            id="gib-btn4"
          >
            More Info
          </button>
          {active === "FourthCard" && (
            <GibCard
              title="Gibson ES-333"
              info="The body is made of arched, laminated wood, with the exterior and interior laminations being made of maple. There is a maple central core in the body, to which the top and bottom, and neck are attached. The neck is one baulk of mahogany, with a rosewood fingerboard and pearloid dot markers. The hardware is nickel-plated. As delivered by Gibson, the ES-333 had no pickup covers, nor pickguard, and came with black speed knobs."
            />
          )}
        </div>
        <div className="gib-container gib-container2-2">
          <img
            className="gib-img5"
            src={Image5}
            style={{
              filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="196px"
          />
          <h3 className="gib-header gib-header-2">Gibson ES-175</h3>
          <p className="gib-p-1">
            The Gibson ES-175 is an electric guitar manufactured by the Gibson
            Guitar Corporation. In 2019 it was dropped from production.
          </p>
          <button
            onClick={() => setActive("FifthCard")}
            onBlur={() => setActive("")}
            className="gib-btn"
            id="gib-btn5"
          >
            More Info
          </button>
          {active === "FifthCard" && (
            <GibCard
              title="Gibson ES-175"
              info="The ES-175 is a single- or dual-pickup archtop electric guitar made by Gibson. Unlike Gibson's L5 and Super 400 guitars, the ES-175 typically has an all-laminate construction, which allows the cost of materials and construction to be kept down, as well as assisting in keeping feedback at higher volumes manageable."
            />
          )}
        </div>
        <div className="gib-container gib-container2-3">
          <img
            className="gib-container2-img3"
            src={Image6}
            style={{
              filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="163px"
          />
          <h3 className="gib-header gib-header-2">Gibson ES-375</h3>
          <p className="gib-p-1">
            The Gibson ES series of semi-acoustic guitars (hollow body electric
            guitars) are manufactured by the Gibson Guitar Corporation.
          </p>
          <button
            onClick={() => setActive("SixthCard")}
            onBlur={() => setActive("")}
            className="gib-btn"
            id="gib-btn6"
          >
            More Info
          </button>
          {active === "SixthCard" && (
            <GibCard
              title="Gibson ES-375"
              info="Many of the models come with f-holes, though some, such as B.B. King's signature Lucille series, are made without f-holes. Some models are full-bodied models, while single- and double-cutaways are also available. Two different styles of cutaways are used, both named by Gibson after Italian cities."
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

export default Gibson;
