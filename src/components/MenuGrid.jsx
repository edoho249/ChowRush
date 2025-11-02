import React, { useState } from "react";
import { motion } from "framer-motion";
import { useStore } from "../context/store";
import "../styles/menu.css";
const tabs = [
  "all",
  "Soup",
  "Vegetarian",
  "Pasta",
  "Beef",
  "Lamb",
  "Dessert",
  "Pork",
  "Chicken",
  "Seafood",
  "French",
  "Starter",
  "Side",
];

export default function MenuGrid({ limit }) {
  const [active, setActive] = useState("all");
  const { products, addToCart } = useStore();

  let list = active === "all" ? products : products.filter((p) => p.category === active);
  if (limit) list = list.slice(0, limit);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } }),
  };

  return (
    <section className="section">
      <div className="container">
        <div className="menu-header">
          <h2 className="title">Our Regular Menu Pack</h2>
          <a className="pill" href="/menu">
            See Menu
          </a>
        </div>

        <div className="tab-list">
          {tabs.map((t) => (
            <button
              key={t}
              className={`pill ${active === t ? "active" : ""}`}
              onClick={() => setActive(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {list.map((p, index) => (
            <motion.div
              key={p.id}
              className="card food-card"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <div className="image-box">
                <img src={p.img} alt={p.name} />
              </div>
              <div className="card-info">
                <div>
                  <div className="food-name">{p.name}</div>
                  <div className="muted">₦{p.price.toLocaleString()}</div>
                </div>
                <button className="pill" onClick={() => addToCart(p.id)}>
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
