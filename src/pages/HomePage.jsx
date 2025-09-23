// pages/HomePage.js

import React from "react";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";
import HeroSection from "../components/sections/HeroSection";
import StrengthsSection from "../components/sections/StrengthsSection";
import ServicesPreview from "../components/sections/ServicesPreview";
import PortfolioPreview from "../components/sections/PortfolioPreview";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CTASection from "../components/sections/CTASection";


const HomePage = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const title = t("seo.home.title");
  const description = t("seo.home.description");
  const keywords = t("seo.home.keywords", { returnObjects: true });
  const canonicalPath = "/";
  const alternates = { "x-default": "/", en: "/", ar: "/" };

  return (
    <div>
      <SEO title={title} description={description} keywords={keywords} canonicalPath={canonicalPath} alternates={alternates} />
      <HeroSection />
      <StrengthsSection />
      <ServicesPreview />
      <PortfolioPreview />
      <CTASection />
    </div>
  );
};

export default HomePage;