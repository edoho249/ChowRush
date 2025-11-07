import React, { useMemo } from "react";
import Slider from "react-slick";
import { useStore } from "../context/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/PopularDishes.module.css";

export default function PopularDishes() {
  const { products = [], favorites = new Set(), toggleFav, addToCart } = useStore();

  const previewProducts = useMemo(() => products.slice(0, 6), [products]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    centerMode: false
  };

  return (
    <section className={styles.section} id="popular">
      <div className={styles.container}>
        <h2 className={styles.title}>Popular Dishes</h2>
        <Slider {...settings}>
          {previewProducts.map((p) => (
            <div key={p.id} className={styles.slideWrapper}>
              <div className={styles.card}>
                <img
                  src={p.img || "https://via.placeholder.com/400x250"}
                  alt={p.name}
                  className={styles.image}
                />
                <button
                  className={styles.favBtn}
                  aria-label={favorites.has(p.id) ? "Remove from favorites" : "Add to favorites"}
                  onClick={() => toggleFav(p.id)}
                >
                  {favorites.has(p.id) ? "❤️" : "🤍"}
                </button>
                <div className={styles.cardContent}>
                  <h3 className={styles.name}>{p.name}</h3>
                  <p className={styles.desc}>{p.desc}</p>
                  <div className={styles.footer}>
                    <strong>₦{p.price.toLocaleString()}</strong>
                    <button
                      className={styles.cartBtn}
                      aria-label={`Add ${p.name} to cart`}
                      onClick={() => addToCart(p.id)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
