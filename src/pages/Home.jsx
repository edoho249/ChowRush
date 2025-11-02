import React from "react";
import SlideInSection from "../components/SlideInSection";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import PopularDishes from "../components/PopularDishes";
import Services from "../components/Services";
import MenuGrid from "../components/MenuGrid";
import ReservationCTA from "../components/ReservationCTA";
import Testimonials from "../components/Testimonials";
import Chefs from "../components/Chefs";
import AppDownload from "../components/AppDownload";
import Footer from "../components/Footer";

export default function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SlideInSection from="left">
        <Hero />
      </SlideInSection>
      {/* <SlideInSection from="right">
        <Categories />
      </SlideInSection> */}
      <SlideInSection from="left">
        <PopularDishes />
      </SlideInSection>
      <SlideInSection from="right">
        <Services />
      </SlideInSection>
      <SlideInSection from="left">
        <MenuGrid limit={6} />
      </SlideInSection>
      <SlideInSection from="right">
        <ReservationCTA />
      </SlideInSection>
      <SlideInSection from="left">
        <Testimonials />
      </SlideInSection>
      <SlideInSection from="right">
        <Chefs />
      </SlideInSection>
      <SlideInSection from="left">
        <AppDownload />
      </SlideInSection>
      <Footer />
    </>
  );
}
