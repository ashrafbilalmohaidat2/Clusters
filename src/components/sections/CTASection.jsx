// components/sections/CTASection.js
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CTASection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-gradient-to-r from-[#00AEEF] to-[#1b5e82] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">{t("ctaTitle")}</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          {t("ctaSubtitle")}
        </p>
        <Link
          to="/contact"
          className="bg-white text-[#00AEEF] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-lg inline-block"
        >
          {t("getStarted")}
        </Link>
      </div>
    </section>
  );
};

export default CTASection;