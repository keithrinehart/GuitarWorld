import React, { useState } from "react";
import "../css/jackson.css";
import NavBar from "../pages/navbar/jacknav";
import Banner from "../components/banners/banner4";
import GibCard from "../pages/gibsonInfo";
import Header from "../components/header";
import JacksonLogo from "../img/Jackson-logo.png";
import Image1 from "../img/jackson-js22.png";
import Image2 from "../img/jackson-dinky-js32.png";
import Image3 from "../img/jackson-king-v.png";
import Image4 from "../img/jackson-slx-soloist-x-series.png";
import Image5 from "../img/jackson-soloist.png";
import Image6 from "../img/jackson-7string.png";
import BackBtn from "../components/backbtn";
import Footer from "../components/footers/footer5";

function Jackson() {
  const [active, setActive] = useState("");

  return (
    <div id="jackson-container" className="jackson-container">
      <NavBar />
      <Header />
      <div className="header-jackson">
        <h3 className="jackson-h3-head">1979 ~ 2021</h3>
        <img className="gib-logo" src={JacksonLogo} alt="" />
      </div>
      <div className="jackson-flex">
        <Banner heading="Metal + Metal" />
        <div className="jack-container">
          <img
            className="jack-img1"
            src={Image1}
            style={{
              filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="140px"
          />
          <h3 className="jack-header">Jackson Dinky JS22</h3>
          <p id="jack-p-1" className="jack-p-1">
            Two humbucking pickups,both Jackson made, a compound radius neck
            with 24 frets. It has a fulcrum bridge and the body is made from
            Indian Cedro.
          </p>
          <button
            onClick={() => setActive("FirstCard")}
            onBlur={() => setActive("")}
            className="jack-btn"
            id="jack-btn1"
          >
            More Info
          </button>
          {active === "FirstCard" && (
            <GibCard
              title="Jackson Dinky JS22"
              info="The Dinky is the most common Jackson in production today with over 15 variants on the current market. These are below arranged in the series that they are given by Jackson Guitars. The Dinky is named for its slightly smaller than normal (7/8) body size. Usually fitted with a two humbucker pickup configuration, some models also include single-coil pickups and/or just one bridge humbucker."
            />
          )}
        </div>

        <div className="jack-container jack-container-2">
          <img
            className="jack-img2"
            src={Image2}
            style={{
              filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="446px"
          />
          <h3 className="jack-header">Jackson Dinky JS32</h3>
          <p id="jack-p-2" className="jack-p-1">
            The JS32R has a compound radius neck with 24 frets. Floyd Rose
            Licensed Bridge, two Humbuckers by Jackson and a reversed headstock.
          </p>
          <button
            onClick={() => setActive("SecondCard")}
            onBlur={() => setActive("")}
            className="jack-btn"
            id="jack-btn2"
          >
            More Info
          </button>
          {active === "SecondCard" && (
            <GibCard
              title="Jackson Dinky JS32"
              info="The fretboard can be made out of ebony, rosewood and more recently maple, or rock maple, with 24 jumbo frets and is always built with a bolt-on neck. Most of the guitars have a Floyd Rose original or licensed tremolo, and a locking nut to help maintain stable tuning. Some Dinkys have hardtail, or String-Thru bridges. The Jackson Dinky is usually preferred by players of hard rock and heavy metal. "
            />
          )}
        </div>
        <div className="jack-container jack-container-3">
          <img
            className="jack-img3"
            src={Image3}
            style={{
              filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="159px"
          />
          <h3 className="jack-header">Jackson Warrior JS32T</h3>
          <p id="jack-p-3" className="jack-p-1">
            Megadeth frontman Dave Mustaine eventually became the guitarist most
            identified with using this model. Perfect for headbanging metal.
          </p>
          <button
            onClick={() => setActive("ThirdCard")}
            onBlur={() => setActive("")}
            className="jack-btn"
            id="jack-btn3"
          >
            More Info
          </button>
          {active === "ThirdCard" && (
            <GibCard
              title="Jackson Warrior JS32T"
              info="The Jackson King V was originally named after Robbin Crosby of Ratt, his nickname being King. Crosby popularized the guitar throughout the 1980s, however the guitar he played most often was his Double Rhoads guitar, a modified design of the Jackson Rhoads guitar. King V model surfaced as a downsized version of the Double Rhoads, which was designed and targeted for shorter, more ordinary person (Crosby was 6.5 feet/198 cm tall, hence the nickname, King). "
            />
          )}
        </div>
      </div>
      {/****************CONTAINER2*******************/}
      {/****************CONTAINER2*******************/}
      {/****************CONTAINER2*******************/}
      {/****************CONTAINER2*******************/}
      {/****************CONTAINER2*******************/}
      <div className="jackson-column-2">
        <div className="jack-container">
          <img
            className="jack-img4"
            src={Image4}
            style={{
              filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="140px"
          />
          <h3 className="jack-header jack-header-2">Jackson SLX Soloist X</h3>
          <p className="jack-p-1">
            As the 1980s brought up a shredding guitarist phenomenon, the
            Soloist was acclaimed in rock and metal music, especially by lead
            guitarists.
          </p>
          <button
            onClick={() => setActive("FourthCard")}
            onBlur={() => setActive("")}
            className="jack-btn"
            id="jack-btn4"
          >
            More Info
          </button>
          {active === "FourthCard" && (
            <GibCard
              title=" Jackson SLX Soloist X Series"
              info="The Jackson Soloist is an electric guitar model by Jackson Guitars officially produced since 1984 (prototypes were available in the early 1980s). Overall design started as a superstrat with differences from the Stratocaster such as a neck-thru design and often a Floyd Rose double-locking tremolo bridge and premium woods. This guitar is a pure beast. Just look at the neck on this thing!"
            />
          )}
        </div>
        <div className="jack-container jack-container2-2">
          <img
            className="jack-img5"
            src={Image5}
            style={{
              filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="140px"
          />
          <h3 className="jack-header jack-header-2">Jackson Soloist</h3>
          <p className="jack-p-1">
            There are examples of the Soloist idea going back to the days before
            Jackson was an official company and just a side project of Grover
            Jackson.
          </p>
          <button
            onClick={() => setActive("FifthCard")}
            onBlur={() => setActive("")}
            className="jack-btn"
            id="jack-btn5"
          >
            More Info
          </button>
          {active === "FifthCard" && (
            <GibCard
              title="Jackson Soloist"
              info="The first official Soloist was serial #J0158 completed August 28, 1984 (though later serial numbered guitars were completed a week and a half earlier). Before that the Soloist styled guitars were named Custom Strat or Neck-Through Body Strat guitars. The earlier models were typically true custom guitars that follow no real standard. By the time J0158 came around the factory had a basic spec outline used as a default on all guitars ordered and only changed when specified by the customer. "
            />
          )}
        </div>

        <div className="jack-container jack-container2-3">
          <img
            className="jack-container2-img3"
            src={Image6}
            style={{
              filter: "drop-shadow(0px 8px 3px rgb(0,0,0,0.29))",
            }}
            alt=""
            width="140px"
          />
          <h3 className="jack-header jack-header-2">
            Jakes Seven String Dream
          </h3>
          <p className="jack-p-1">
            I just want to give a shoutout to my brother Jake. Realist person i
            know and i love you man. This section is definitely for you. Hope
            you like it and enjoy!
          </p>
          <button
            onClick={() => setActive("SixthCard")}
            onBlur={() => setActive("")}
            className="jack-btn"
            id="jack-btn6"
          >
            More Info
          </button>
          {active === "SixthCard" && (
            <GibCard
              title="Jakes Seven String Dream"
              info="My brother is 100% metal and 0% world haha Dude can be the nicest person in the world then turn around and pick up his Jackson and melt your face off with material that the world has never seen or heard before. I hope you go after the stage brother and leave the rest behind. Take your dream and make it happen man!"
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

export default Jackson;
