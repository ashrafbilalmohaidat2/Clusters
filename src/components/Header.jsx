// components/Header.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navItems = [
    { name: t("home"), path: "/" },
    { name: t("about"), path: "/about" },
    { name: t("services"), path: "/services" },
    { name: t("portfolio"), path: "/portfolio" },
    { name: t("contact"), path: "/contact" }
  ];

  const isActive = (path) => location.pathname === path;

  // Handle RTL direction
  // Set document direction for RTL/LTR, safe for browser only
  React.useEffect(() => {
    if (typeof document !== "undefined") {
      const isArabic = i18n.language === "ar";
      document.documentElement.dir = isArabic ? "rtl" : "ltr";
      document.documentElement.lang = isArabic ? "ar" : "en";
    }
  }, [i18n.language]);

  // Language switcher
  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
  <nav className="bg-white shadow-md sticky py-4 top-0 z-50 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="w-20 h-20"
              onClick={(e) => {
                if (location.pathname === "/") {
                  if (typeof window !== "undefined" && window.scrollTo) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }
              }}
            >
              <img src="logoClusters.png" alt="Clusters company logo" />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={(e) => {
                    if (item.path === "/" && location.pathname === "/") {
                      if (typeof window !== "undefined" && window.scrollTo) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }
                  }}
                  className={`px-3 py-2 rounded-md text-md font-bold transition-colors duration-200 ${
                    isActive(item.path)
                      ? "bg-[#F0F9FF] text-[#00AEEF]"
                      : "text-[#3C3C3C] hover:bg-[#F8FAFC] hover:text-[#00AEEF]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* Language Switcher */}
            <div className="ml-6 flex gap-2">
              <button
                onClick={() => handleLanguageChange("en")}
                className={`px-3 py-1.5 rounded-full text-sm font-bold shadow transition-all hover:cursor-pointer duration-200 focus:outline-none border-2
                  ${i18n.language === "en"
                    ? "bg-gradient-to-r from-[#00AEEF] to-[#1E3A8A] text-white border-transparent scale-105 shadow-lg"
                    : "bg-white text-[#00AEEF] border-[#00AEEF] hover:bg-[#F0F9FF] hover:scale-105"}
                `}
                style={{ minWidth: 48 }}
              >
                EN
              </button>
              <button
                onClick={() => handleLanguageChange("ar")}
                className={`px-3 py-1.5 rounded-full text-sm font-bold hover:cursor-pointer shadow transition-all duration-200 focus:outline-none border-2
                  ${i18n.language === "ar"
                    ? "bg-gradient-to-r from-[#00AEEF] to-[#1E3A8A] text-white border-transparent scale-105 shadow-lg"
                    : "bg-white text-[#00AEEF] border-[#00AEEF] hover:bg-[#F0F9FF] hover:scale-105"}
                `}
                style={{ minWidth: 48 }}
              >
                العربية
              </button>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#3C3C3C] hover:text-[#00AEEF] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#C5C9CC]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={(e) => {
                  if (item.path === "/" && location.pathname === "/") {
                    if (typeof window !== "undefined" && window.scrollTo) {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }
                  setIsMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-bold w-full text-left transition-colors duration-200 ${
                  isActive(item.path)
                    ? "bg-[#F0F9FF] text-[#00AEEF]"
                    : "text-[#3C3C3C] hover:bg-[#F8FAFC] hover:text-[#00AEEF]"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Language Switcher Mobile */}
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleLanguageChange("en")}
                className={`px-3 py-1.5 rounded-full text-sm font-bold shadow transition-all duration-200 focus:outline-none border-2
                  ${i18n.language === "en"
                    ? "bg-gradient-to-r from-[#00AEEF] to-[#1E3A8A] text-white border-transparent scale-105 shadow-lg"
                    : "bg-white text-[#00AEEF] border-[#00AEEF] hover:bg-[#F0F9FF] hover:scale-105"}
                `}
                style={{ minWidth: 48 }}
              >
                EN
              </button>
              <button
                onClick={() => handleLanguageChange("ar")}
                className={`px-3 py-1.5 rounded-full text-sm font-bold shadow transition-all duration-200 focus:outline-none border-2
                  ${i18n.language === "ar"
                    ? "bg-gradient-to-r from-[#00AEEF] to-[#1E3A8A] text-white border-transparent scale-105 shadow-lg"
                    : "bg-white text-[#00AEEF] border-[#00AEEF] hover:bg-[#F0F9FF] hover:scale-105"}
                `}
                style={{ minWidth: 48 }}
              >
                العربية
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;