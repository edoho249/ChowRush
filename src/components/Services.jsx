import React from 'react';
import fastDeliveryImg from '../assets/images/fast-delivery.png';
import onlineSupportImg from '../assets/images/online-support.png';
import coolPricesImg from '../assets/images/cool-prices.png';
import cleanKitchenImg from '../assets/images/clean-kitchen.png';
import onlineOrderImg from '../assets/images/online-order.png';
import superChefImg from '../assets/images/super-chef.png';

const items = [
  { title: 'Fast Delivery', img: fastDeliveryImg },
  { title: 'Online Support', img: onlineSupportImg },
  { title: 'Cool Prices', img: coolPricesImg },
  { title: 'Clean Kitchen', img: cleanKitchenImg },
  { title: 'Online Order', img: onlineOrderImg },
  { title: 'Super Chef', img: superChefImg },
];


export default function Services() {
  return (
    <section className="section" style={{ background: "#f8fafc" }}>
      <div className="container">
        <h2 className="title" style={{ fontSize: 28 }}>
          We are more than multiple services.
        </h2>
        <p
          className="subtitle"
          style={{ maxWidth: 680, marginBottom: 24 }}
        >
          Food is one of the basic necessities of life. We are more than multiple services which serve the best foods and drinks. We provide the best and healthiest foods with great taste.
        </p>

        <div className="grid" style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(3, 1fr)" }}>
          {items.map((it, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: 24,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                minHeight: 180,
                justifyContent: "center",
              }}
            >
              <div
                className="image-box"
                style={{
                  width: 80,
                  height: 80,
                  marginBottom: 12,
                  background: `url(${it.img}) center center / contain no-repeat`,
                }}
              />
              <h3 style={{ textAlign: "center" }}>{it.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}