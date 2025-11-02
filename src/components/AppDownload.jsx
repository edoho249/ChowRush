import React from "react";
import appImg from "../assets/images/app.png"; 
import "../styles/appdownload.css";

export default function AppDownload() {
  return (
    <section className="section app-section">
      <div className="container app-container">
       
        <div className="app-text">
          <h2 className="app-title">
            Never feel hungry! <br />
            Download our mobile app <br />
            Enjoy Delicious Food
          </h2>
          <p className="app-subtitle">
            Make online reservations, read reviews from diners and earn points towards free meals.
          </p>
          <div className="app-buttons">
            <button className="pill">Download on the App Store</button>
            <button className="pill">Get it from Google Play</button>
          </div>
        </div>

        <div className="app-image">
          <img src={appImg} alt="App" />
        </div>
      </div>
    </section>
  );
}
