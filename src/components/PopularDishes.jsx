import React from "react";
import Slider from "react-slick";
import { useStore } from "../context/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PopularDishes() {
  const { products = [], favorites = new Set(), toggleFav, addToCart } = useStore();

  const previewProducts = products.slice(0, 6);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,      
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,  
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, 
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="section" id="popular">
      <div className="container" style={{ maxWidth: 1000, margin: "0 auto" }}>
        <h2 className="title" style={{ fontSize: 28, marginBottom: 20 }}>
          Popular Dishes
        </h2>
        <Slider {...settings}>
          {previewProducts.map((p) => (
            <div key={p.id} style={{ padding: 12 }}>
              <div
                style={{
                  height: 180,
                  background: "#f1f5f9",
                  position: "relative",
                  borderRadius: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={p.img || "https://via.placeholder.com/150"}
                  alt={p.name}
                  style={{ maxHeight: "100%", borderRadius: 10, width: "100%", objectFit: "cover" }}
                />
                <button
                  onClick={() => toggleFav(p.id)}
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    border: "none",
                    background: "#fff",
                    borderRadius: "50%",
                    padding: 8,
                    cursor: "pointer",
                  }}
                >
                  {favorites.has(p.id) ? "❤️" : "🤍"}
                </button>
              </div>
              <h3 style={{ marginTop: 10 }}>{p.name}</h3>
              <p className="muted" style={{ margin: "6px 0 10px" }}>
                {p.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <strong>₦{p.price.toLocaleString()}</strong>
                <button className="pill" onClick={() => addToCart(p.id)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </Slider>

        <div style={{ textAlign: "center", marginTop: 20 }}>
          <a href="/menu" className="pill">
            See Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
