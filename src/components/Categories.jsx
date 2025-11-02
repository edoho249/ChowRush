import React from "react";
import "../styles/categories.css";
import dishesImg from "../assets/images/dishes.jpg";
import dessertImg from "../assets/images/dessert.jpg";
import drinksImg from "../assets/images/drinks.jpg";
import snacksImg from "../assets/images/snacks.jpg";

const cats = [
  { title: "dishes", img: dishesImg },
  { title: "dessert", img: dessertImg },
  { title: "drinks", img: drinksImg },
  { title: "snacks", img: snacksImg },
];




export default function Categories() {
  return (
    <section className="categories-section">
      <div className="categories-container">
        <div className="categories-grid">
          {cats.map((c, i) => (
            <div key={i} className="category-card">
              <div
                className="category-image"
                style={{ backgroundImage: `url(${c.img})` }}
              />
              <h3>{c.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
