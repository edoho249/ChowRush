import React from "react";
import hero from "../assets/images/hero.jpg"; 
import logo from "../assets/images/logo.png"; 
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">

        <div className="hero-text">
          
          <img src={logo} alt="Logo" className="hero-logo" />
          
          <h1 className="hero-title">
            We serve the food <br /> you love
          </h1>
          <p className="hero-subtitle">
            This is the type of restaurant which typically serves the best foods
            and drinks.
          </p>
          <button className="hero-btn">Explore food</button>
        </div>

 
        <div className="hero-image">
          <img src={hero} alt="Delicious food" />
        </div>
      </div>
    </section>
  );
}
