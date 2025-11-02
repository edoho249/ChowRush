
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chefImg from "../assets/images/chef.jpg";

export default function Chefs() {
  const chefs = [
    { id: 1, name: "Chef Ade", role: "Head Chef" },
    { id: 2, name: "Chef Sara", role: "Pastry Specialist" },
    { id: 3, name: "Chef Tom", role: "Grill Master" },
    { id: 4, name: "Chef Mei", role: "Asian Cuisine" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="section" id="chefs">
      <div className="container">
        <h2 className="title" style={{ fontSize: 28, marginBottom: 20 }}>
          Meet Our Chefs
        </h2>
        <Slider {...settings}>
          {chefs.map((chef) => (
            <div
              key={chef.id}
              className="card"
              style={{
                padding: 16,
                textAlign: "center",
              }}
            >
              <img
                src={chefImg}
                alt={chef.name}
                style={{
                  width: "100%",
                  borderRadius: 12,
                  height: 220,
                  objectFit: "cover",
                }}
              />
              <h3 style={{ marginTop: 10 }}>{chef.name}</h3>
              <p className="muted">{chef.role}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
