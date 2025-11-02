
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialBg from "../assets/images/testimonials.jpg";
import user1 from "../assets/images/testimonials.jpg";
import user2 from "../assets/images/testimonials.jpg";
import user3 from "../assets/images/testimonials.jpg";

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
    <section className="section" id="testimonials">
      <div className="container">
        <h2 className="title" style={{ fontSize: 28, marginBottom: 20 }}>
          What Our Customers Say
        </h2>

        <Slider {...settings}>
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="testimonial-card"
              style={{
                backgroundImage: `url(${testimonialBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 12,
                padding: 20,
                minHeight: 180,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                color: "#fff",
              }}
            >
              <p style={{ fontStyle: "italic", marginBottom: 12, textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
                "{t.text}"
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={t.img}
                  alt={t.name}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    marginRight: 10,
                    border: "2px solid #fff",
                  }}
                />
                <strong>{t.name}</strong>
              </div>
            </div>
          ))}
        </Slider>
      </div>

 
      <style jsx>{`
        @media (max-width: 768px) {
          .testimonial-card {
            min-height: 220px;
            padding: 16px;
          }
        }

        @media (max-width: 480px) {
          .testimonial-card {
            min-height: 200px;
            padding: 12px;
          }
        }
      `}</style>
    </section>
  );
}
