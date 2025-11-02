import React from "react";
import Slider from "react-slick";
import meImage from "../assets/images/me.jpeg"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const team = [
  { name: "Mark", role: "Head Chef" },
  { name: "Sara", role: "Nutritionist" },
  { name: "Tom", role: "Restaurant Manager" },
];

const values = [
  { title: "Quality", desc: "Only the freshest ingredients go into our dishes." },
  { title: "Speed", desc: "Fast delivery without compromising taste." },
  { title: "Customer Care", desc: "Your satisfaction is our priority." },
];

const logos = [1, 2, 3, 4];

export default function About() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <main className="section about-page">
    
      <section
        className="about-hero"
        style={{
          padding: "2rem 0",
          textAlign: "center",
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        <h1 className="title" style={{ fontSize: 32, marginBottom: 12 }}>
          About Us
        </h1>
        <p className="subtitle" style={{ fontSize: 18, marginBottom: 24 }}>
          We are a modern food platform delivering the meals you love.
        </p>
        <div
          style={{
            width: "100%",
            height: 300,
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          <img
            src={meImage}
            alt="Me"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </section>

   
      <section className="about-values" style={{ padding: "2rem 0" }}>
        <h2 className="title" style={{ textAlign: "center", marginBottom: 24 }}>
          Our Core Values
        </h2>
        <div
          className="grid grid-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 24,
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          {values.map((v, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: 20,
                textAlign: "center",
                borderRadius: 12,
                background: "#f1f5f9",
              }}
            >
              <img
                src={meImage}
                alt={v.title}
                style={{ width: "100%", height: 150, objectFit: "cover", borderRadius: 12, marginBottom: 12 }}
              />
              <h3 style={{ marginBottom: 8 }}>{v.title}</h3>
              <p style={{ fontSize: 14, color: "#4b5563" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="about-team" style={{ padding: "2rem 0" }}>
        <h2 className="title" style={{ textAlign: "center", marginBottom: 24 }}>
          Meet Our Team
        </h2>
        <Slider {...sliderSettings}>
          {team.map((t, i) => (
            <div key={i} style={{ padding: 12 }}>
              <div
                style={{
                  height: 250,
                  borderRadius: 12,
                  overflow: "hidden",
                  background: "#e2e8f0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 12,
                }}
              >
                <img
                  src={meImage}
                  alt={t.name}
                  style={{
                    borderRadius: "50%",
                    width: 120,
                    height: 120,
                    objectFit: "cover",
                    marginBottom: 12,
                  }}
                />
                <h3 style={{ marginBottom: 4 }}>{t.name}</h3>
                <p style={{ fontSize: 14, color: "#6b7280" }}>{t.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className="about-story" style={{ padding: "2rem 0", background: "#f8fafc" }}>
        <div
          className="story-container"
          style={{
            display: "flex",
            gap: 24,
            alignItems: "center",
            maxWidth: 1000,
            margin: "0 auto",
            flexWrap: "wrap",
          }}
        >
          <div className="story-text" style={{ flex: 1, minWidth: 280 }}>
            <h2 className="title" style={{ marginBottom: 16 }}>
              Our Story
            </h2>
            <p style={{ lineHeight: 1.6, marginBottom: 12 }}>
              From a small kitchen to a full-fledged food delivery platform, we’ve always focused on making meals that satisfy both taste and heart.
            </p>
            <p style={{ lineHeight: 1.6 }}>
              Our journey is fueled by love for food and care for our customers. Today, we continue to innovate, serve quality meals, and connect with our community.
            </p>
          </div>
          <div className="story-image" style={{ flex: 1, minWidth: 280 }}>
            <div
              style={{
                height: 250,
                borderRadius: 12,
                background: "#e2e8f0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={meImage}
                alt="Our Story"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-logos" style={{ padding: "2rem 0", textAlign: "center" }}>
        <h2 className="title" style={{ marginBottom: 24 }}>Our Partners</h2>
        <div
          className="logo-grid"
          style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 24 }}
        >
          {logos.map((l, i) => (
            <img
              key={i}
              src={meImage}
              alt={`Partner ${i + 1}`}
              style={{ width: 100, height: 60, objectFit: "contain" }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
