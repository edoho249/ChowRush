import React from "react";
import { 
  FaShippingFast, 
  FaHeadset, 
  FaDollarSign, 
  FaUtensils, 
  FaShoppingCart, 
  FaUserTie 
} from "react-icons/fa";
import "../styles/services.css";

const services = [
  { title: "Fast Delivery", icon: <FaShippingFast /> },
  { title: "Online Support", icon: <FaHeadset /> },
  { title: "Cool Prices", icon: <FaDollarSign /> },
  { title: "Clean Kitchen", icon: <FaUtensils /> },
  { title: "Online Order", icon: <FaShoppingCart /> },
  { title: "Super Chef", icon: <FaUserTie /> },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">We are more than multiple services</h2>
        <p className="services-subtitle">
          Food is one of the basic necessities of life. We provide the best and healthiest
          foods with great taste, ensuring top-notch service in every bite.
        </p>

        <div className="services-grid">
          {services.map((item, index) => (
            <div key={index} className="service-card">
              <div className="icon-box">{item.icon}</div>
              <h3 className="card-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
