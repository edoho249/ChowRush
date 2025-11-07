import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialBg from "../assets/images/testimonials.jpg";
import user1 from "../assets/images/testimonials.jpg";
import user2 from "../assets/images/testimonials.jpg";
import user3 from "../assets/images/testimonials.jpg";
import "../styles/testimonials.css";

export default function Testimonials() {
  const testimonials = [
    { id: 1, name: "Jane Doe", text: "Best food delivery app I've ever used!", img: user1 },
    { id: 2, name: "John Smith", text: "ChowRush never disappoints, always on time!", img: user2 },
    { id: 3, name: "Amaka U.", text: "Delicious meals, easy ordering, 5 stars!", img: user3 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <h2 className="title">What Our Customers Say</h2>

        <Slider {...settings}>
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="testimonial-card"
              style={{ backgroundImage: `url(${testimonialBg})` }}
            >
              <p>"{t.text}"</p>
              <div className="user">
                <img src={t.img} alt={t.name} />
                <strong>{t.name}</strong>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
