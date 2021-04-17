import React, { useState } from "react";
import Banner from "../components/banners/banner3";
import GibCard from "../pages/gibsonInfo";
import "../css/epiphone.css";
import NavBar from "../pages/navbar/epinav";
import Header from "../components/header";
import EpiphoneLogo from "../img/epiphone-logo.png";
import Image1 from "../img/epiphone-blueshawk.png";
import Image2 from "../img/epiphone-les-paul.png";
import Image3 from "../img/epiphone-casino.png";
import Image4 from "../img/les-paul-epiphone-g400.png";
import Image5 from "../img/epiphone-les-paul-custom-pro.png";
import Image6 from "../img/epiphone-330.png";
import BackBtn from "../components/backbtn";
import Footer from "../components/footers/footer4";

function Epiphone() {
  const [active, setActive] = useState("");
  return (
    <div id="epiphone-container" className="epiphone-container">
      <NavBar />
      <Header />
      <div className="header-epiphone">
        <h3 className="epiphone-h3-head">1873 ~ 2021</h3>
        <img className="ep-logo" src={EpiphoneLogo} alt="" />
      </div>
      <div className="epiphone-flex">
        <Banner heading="Classic and Modern" />
        <div className="ep-container">
          <img
            className="ep-img1"
            src={Image1}
            style={{
              filter: "drop-shadow(-8px 0 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="150px"
          />
          <h3 className="ep-header">Epiphone Blueshawk</h3>
          <p className="ep-p-1">
            The Gibson Blueshawk is a relatively recently designed (1996–2006)
            Gibson model designed mainly for blues players and resembles the Les
            Paul.
          </p>
          <button
            onClick={() => setActive("FirstCard")}
            onBlur={() => setActive("")}
            className="ep-btn"
            id="ep-btn1"
          >
            More Info
          </button>
          {active === "FirstCard" && (
            <GibCard
              title="Epiphone Blueshawk"
              info="During the 2015 Winter NAMM show, Epiphone revealed a reissue of the Gibson Bluehawk called the Epiphone Blueshawk Deluxe. While it has similar specifications to the original Gibson version, the Blueshawk Deluxe features a flamed maple veneer on top of a solid maple top, Epiphone's own PRO-90 single-coil pickups, a bound fingerboard, and no option for a Maestro tremolo, instead of a non-figured maple top, Blues 90s single coils, unbound fingerboard, and option for a tremolo."
            />
          )}
        </div>

        <div className="ep-container ep-container-2">
          <img
            className="ep-img2"
            src={Image2}
            style={{
              filter: "drop-shadow(-6px 4px 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="350px"
          />
          <h3 className="ep-header">Epiphone Les Paul</h3>
          <p className="ep-p-1">
            A solid body guitar line produced by Epiphone as a more modestly
            priced version of the famous Gibson Les Paul and Epiphone is a
            subsidiary of the Gibson Guitar.
          </p>
          <button
            onClick={() => setActive("SecondCard")}
            onBlur={() => setActive("")}
            className="ep-btn"
            id="ep-btn2"
          >
            More Info
          </button>
          {active === "SecondCard" && (
            <GibCard
              title="Epiphone Les Paul"
              info="Very similar to a Gibson Les Paul standard, it has a solid mahogany body, mahogany neck (most models) with a rosewood fingerboard, Alnico Classic Humbuckers, Grover tuning pegs, and a Tune-o-Matic bridge. It is considered by some as the flagship model of Les Paul manufactured by Epiphone. Sorry!!! No Zoom available."
            />
          )}
        </div>
        <div className="ep-container ep-container-3">
          <img
            className="ep-img3"
            src={Image3}
            style={{
              filter: "drop-shadow(-8px 0 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="159px"
          />
          <h3 className="ep-header">Epiphone Casino</h3>
          <p className="ep-p-1">
            Paul McCartney was the first to use then John Lpnnon used the
            Epiphone Casino as his main instrument during the remainder of his
            time with the Beatles.
          </p>
          <button
            onClick={() => setActive("ThirdCard")}
            onBlur={() => setActive("")}
            className="ep-btn"
            id="ep-btn3"
          >
            More Info
          </button>
          {active === "ThirdCard" && (
            <GibCard
              title="Epiphone Casino"
              info=" Unlike semi-hollow body guitars such as the Gibson ES-335, which have a center block to promote sustain and reduce feedback, the Casino and its cousin, the Gibson ES-330 are true hollow-bodied guitars. This makes it lighter, and louder when played without an amplifier, but much more prone to feedback than semi-hollow or solid-body electrics."
            />
          )}
        </div>
      </div>
      {/****************CONTAINER2*******************/}
      {/****************CONTAINER2*******************/}
      {/****************CONTAINER2*******************/}
      {/****************CONTAINER2*******************/}
      {/****************CONTAINER2*******************/}
      <div className="epiphone-column-2">
        <div className="ep-container">
          <img
            id="ep-img4"
            className="ep-img4"
            src={Image4}
            style={{
              filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="130px"
          />
          <h3 className="ep-header ep-header-2">Epiphone LP G400</h3>
          <p className="ep-p-1">
            The G-400 (or sometimes G400) is an Epiphone solid body electric
            guitar model produced as a more modestly priced version of the
            famous Gibson SG.
          </p>
          <button
            onClick={() => setActive("FourthCard")}
            onBlur={() => setActive("")}
            className="ep-btn"
            id="ep-btn4"
          >
            More Info
          </button>
          {active === "FourthCard" && (
            <GibCard
              title="Epiphone LP G400"
              info="The design of the G-400 follows that of the Gibson SG. Features include dual pointed cutaways, smaller pickguard (but in some cases, such as the 1966 model or any limited edition model, there is still a large pickguard), set neck, trapezoidal fingerboard inlays (late 80s and early 90s models had dot inlays), dual humbucker pickups, and beveled mahogany body. "
            />
          )}
        </div>
        <div className="ep-container ep-container2-2">
          <img
            className="ep-img5"
            src={Image5}
            style={{
              filter: "drop-shadow(-8px 0 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="196px"
          />
          <h3 className="ep-header ep-header-2">Epiphone LP Custom Pro</h3>
          <p className="ep-p-1">
            Epiphone discontinued the Les Paul Custom line, which was a normal
            Les Paul Custom with a flame maple top and a Vintage Sunburst or a
            Cherry Sunburst finish.
          </p>
          <button
            onClick={() => setActive("FifthCard")}
            onBlur={() => setActive("")}
            className="ep-btn"
            id="ep-btn5"
          >
            More Info
          </button>
          {active === "FifthCard" && (
            <GibCard
              title="Epiphone LP Custom Pro"
              info="The Les Paul Custom features multiple bindings around the back and top of the body and has a bound headstock with a split-diamond inlay. Unlike the Epiphone Les Paul Standard, the Custom model features a nato back and top, the available color variants were alpine white, black beauty and vintage sunburst just to name a few. The split-diamond inlay on the headstock and the block inlays on the fretboard are slightly smaller than on the comparable Gibson model"
            />
          )}
        </div>
        <div className="ep-container ep-container2-3">
          <img
            className="ep-container2-img3"
            src={Image6}
            style={{
              filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="153px"
          />
          <h3 className="ep-header ep-header-2 ep-header-6">
            Rickenbacker 330
          </h3>
          <p className="ep-p-1">
            The Rickenbacker 330 is part of Rickenbacker's 300 series of
            guitars, the series for which Rickenbacker is perhaps best known.
          </p>
          <button
            onClick={() => setActive("SixthCard")}
            onBlur={() => setActive("")}
            className="ep-btn"
            id="ep-btn6"
          >
            More Info
          </button>
          {active === "SixthCard" && (
            <GibCard
              title="Epiphone Rickenbacker 330"
              info="Modern 330s are equipped with Rickenbacker's Hi-Gain single-coil pickups. Formerly, the model came equipped with Rickenbacker's Toaster pickups. The Hi-Gains have noticeably higher output than the Toasters, though this has resulted in the character of the sound in current models being slightly different from that of the older, pre-1970s models. "
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

export default Epiphone;
