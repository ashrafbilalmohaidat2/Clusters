// components/sections/CTASection.js
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CTASection = () => {
  const { t } = useTranslation();
  return (
  <section className="py-16 bg-gradient-to-r from-[#00AEEF] to-[#1166d5] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
  <h2 className="text-3xl font-bold mb-6 font-sans drop-shadow-lg" style={{textShadow: '0 2px 8px rgba(0,0,0,0.18)'}}>{t("ctaTitle")}</h2>
  <p className="text-xl mb-8 max-w-3xl mx-auto font-sans drop-shadow" style={{textShadow: '0 1px 6px rgba(0,0,0,0.15)'}}>
    {t("ctaSubtitle")}
  </p>
  <Link
    to="/contact"
    className="bg-[#F8FAFC] text-[#00AEEF] hover:bg-white hover:text-[#1166d5] font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-lg inline-block shadow-lg border-2 border-white"
    style={{boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)'}}
  >
    {t("getStarted")}
  </Link>
      </div>
    </section>
  );
};

export default CTASection;