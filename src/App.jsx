// App.js
import React, { useState, useEffect, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ClusterLoader from "./components/ClusterLoader";

// Lazy-load route components for code-splitting and faster initial loads
const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const WebDevelopment = lazy(() => import("./ServicesPages/WebDevelopment"));
const UIUXDesign = lazy(() => import("./ServicesPages/UIUXDesign"));
const CloudDevOps = lazy(() => import("./ServicesPages/CloudDevOps"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    const isArabic = i18n.language === 'ar';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = isArabic ? 'ar' : 'en';
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-white">
      {/* document.dir/lang are managed globally via i18n effect for RTL/LTR */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <ScrollToTop />
        <Suspense fallback={<ClusterLoader />}>
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
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;