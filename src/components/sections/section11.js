import React from "react";
import ibanez from "/reactapps/guitarworld/src/img/ibanezblue.png";
import ibanezPicks from "/reactapps/guitarworld/src/img/ibanez-picks.png";
import { Link } from "react-router-dom";
import "../sectionstyle/section11.css";

function section11() {
  return (
    <div id="ibanez-nav-link" className="section11-container">
      <section className="section11">
        <p className="section11-p">
          The Hoshino Gakki company began in 1908 as the musical instrument
          sales division of the Hoshino Shoten, a bookstore chain. Hoshino Gakki
          decided in 1935 to make Spanish-style acoustic guitars, at first using
          the "Ibanez Salvador" brand name in honor of Spanish luthier Salvador
          Ibáñez, and later simply "Ibanez".
        </p>
        <Link to="/ibanez">
          <button className="section11-btn">View Ibanez</button>
        </Link>
      </section>
      <img className="ibanez-img" src={ibanez} alt="woodgrain ibanez" />
      <img
        className="ibanezPicks"
        src={ibanezPicks}
        alt="ibanez guitar picks"
      />
    </div>
  );
}

export default section11;
