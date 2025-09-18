// pages/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/sections/HeroSection";
import StrengthsSection from "../components/sections/StrengthsSection";
import ServicesPreview from "../components/sections/ServicesPreview";
import PortfolioPreview from "../components/sections/PortfolioPreview";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CTASection from "../components/sections/CTASection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <StrengthsSection />
      <ServicesPreview />
      <PortfolioPreview />
      <CTASection />
    </div>
  );
};

export default HomePage;