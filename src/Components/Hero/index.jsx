import React from "react";
import DrumMachine from "../drumMachine";
import "../Hero/Hero.css";

const Hero = ({ handleLogout }) => {
  return (
    <React.Fragment>
      <section className="hero">
        <nav>
          <h2>Welcome</h2>
          <button onClick={handleLogout}>Logout</button>
        </nav>
      </section>
      <DrumMachine />
    </React.Fragment>
  );
};
export default Hero;
