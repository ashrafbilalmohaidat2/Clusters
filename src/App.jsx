// App.js
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import WebDevelopment from "./ServicesPages/WebDevelopment";
import UIUXDesign from "./ServicesPages/UIUXDesign";
import CloudDevOps from "./ServicesPages/CloudDevOps";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    const isArabic = i18n.language === 'ar';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = isArabic ? 'ar' : 'en';
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-white" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/web-development-services" element={<WebDevelopment />} />
          <Route path="/خدمات-تطوير-الويب" element={<WebDevelopment />} />
          <Route path="/ui-ux-design-services" element={<UIUXDesign />} />
          <Route path="/خدمات-تصميم-واجهات-وتجربة-المستخدم" element={<UIUXDesign />} />
          <Route path="/cloud-devops-services" element={<CloudDevOps />} />
          <Route path="/خدمات-هندسة-السحابة-ودفوبس" element={<CloudDevOps />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
