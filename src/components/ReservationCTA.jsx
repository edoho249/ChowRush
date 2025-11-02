import React from "react";
import reservationImg from "../assets/images/reservation.jpg";
import "../styles/reservation.css";

export default function ReservationCTA() {
  return (
    <section className="reservation-section">
      <div className="reservation-container">
       
        <div className="reservation-text">
          <h2 className="reservation-title">
            Do you have any dinner plan today? <br />
            Reserve your table
          </h2>
          <p className="reservation-subtitle">
            Make online reservations with great restaurant reviews from diners and earn points towards free meals.
          </p>
          <button className="reservation-btn">Make Reservation</button>
        </div>

     
        <div className="reservation-image">
          <img src={reservationImg} alt="Reservation" />
        </div>
      </div>
    </section>
  );
}
