// components/Header.js
import React, { useMemo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // Memoize nav items so they're only recalculated when translations update
  const navItems = useMemo(() => ([
    { name: t("home"), path: "/" },
    { name: t("about"), path: "/about" },
    { name: t("services"), path: "/services" },
    { name: t("portfolio"), path: "/portfolio" },
    { name: t("contact"), path: "/contact" }
  ]), [t]);

  const isActive = useCallback((path) => location.pathname === path, [location.pathname]);

  // Single handler for home link scroll behavior to avoid duplication
  const handleHomeClick = useCallback((e, path) => {
    if (path === "/" && location.pathname === "/") {
      if (typeof window !== "undefined" && window.scrollTo) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [location.pathname]);

  // Language switcher
  const handleLanguageChange = useCallback((lng) => {
    if (i18n.language !== lng) i18n.changeLanguage(lng);
  }, [i18n.language, i18n]);

  // Reusable Language Switcher (desktop + mobile)
  const LanguageSwitcher = ({ className = "" }) => (
    <div className={`ms-6 flex gap-2 ${className}`}>
      <button
        type="button"
        onClick={() => handleLanguageChange("en")}
        aria-pressed={i18n.language === "en"}
        className={`px-3 py-1.5 rounded-full text-sm font-bold shadow transition-all hover:cursor-pointer duration-200 focus:outline-none border-2
          ${i18n.language === "en"
            ? "bg-gradient-to-r from-[#00AEEF] to-[#1E3A8A] text-white border-transparent scale-105 shadow-lg"
            : "bg-white text-[#00AEEF] border-[#00AEEF] hover:bg-[#F0F9FF] hover:scale-105"}`}
        style={{ minWidth: 48 }}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => handleLanguageChange("ar")}
        aria-pressed={i18n.language === "ar"}
        className={`px-3 py-1.5 rounded-full text-sm font-bold hover:cursor-pointer shadow transition-all duration-200 focus:outline-none border-2
          ${i18n.language === "ar"
            ? "bg-gradient-to-r from-[#00AEEF] to-[#1E3A8A] text-white border-transparent scale-105 shadow-lg"
            : "bg-white text-[#00AEEF] border-[#00AEEF] hover:bg-[#F0F9FF] hover:scale-105"}`}
        style={{ minWidth: 48 }}
      >
        العربية
      </button>
    </div>
  );

  return (
  <nav className="bg-white shadow-md sticky py-4 top-0 z-50 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              to="/"
              aria-label={t("home")}
              className="w-20 h-20"
              onClick={(e) => handleHomeClick(e, "/")}
            >
              <img src="noPgLogo.png" alt="Clusters company logo" />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <div className="ms-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-current={isActive(item.path) ? "page" : undefined}
                  onClick={(e) => handleHomeClick(e, item.path)}
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
            <LanguageSwitcher />
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
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
        <div id="mobile-menu" className="md:hidden bg-white border-t border-[#C5C9CC] mt-2" aria-hidden={!isMenuOpen}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                aria-current={isActive(item.path) ? "page" : undefined}
                onClick={(e) => { handleHomeClick(e, item.path); setIsMenuOpen(false); }}
                className={`block px-3 py-2 rounded-md text-base font-bold w-full text-start transition-colors duration-200 ${
                  isActive(item.path)
                    ? "bg-[#F0F9FF] text-[#00AEEF]"
                    : "text-[#3C3C3C] hover:bg-[#F8FAFC] hover:text-[#00AEEF]"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Language Switcher Mobile */}
            <LanguageSwitcher className="mt-2" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;