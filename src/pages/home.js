import Header from "../components/header";
import Hamburger from "./hamburger";

import Section1 from "../components/sections/section1";
import Section2 from "../components/sections/section2";
import Section3 from "../components/sections/section3";
import Section4 from "../components/sections/section4";
import Section5 from "../components/sections/section5";
import Section6 from "../components/sections/section6";
import Section7 from "../components/sections/section7";
import Section8 from "../components/sections/section8";
import Section9 from "../components/sections/section9";
import Section10 from "../components/sections/section10";
import Section11 from "../components/sections/section11";
import Footer from "../components/footers/footer";
import "../css/home.css";

function home() {
  return (
    <div id="home" className="App">
      <Hamburger />
      <div id="header-wrap">
        <Header />

        <div id="home" className="header-p-wrap">
          <p className="header-p">A Home for Guitars</p>
          <p className="header-p-2">
            A Home For Guitars is a small project I chose to display some of my
            styling skill sets with CSS and JS. A fully routed react application
            including responsiveness to navigate through at any point while
            going through the site. I am proud to present... GuitarsWorld!
            Enjoy.
          </p>
        </div>
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Footer />
    </div>
  );
}

export default home;
