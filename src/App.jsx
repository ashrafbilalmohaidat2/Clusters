// App.js
import React, { useState } from "react";
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

  return (
    <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen bg-white">
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
