// pages/ServicesPage.js
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/mockData";

const ServicesPage = () => {
  const { t } = useTranslation();
  const title = t("seo.services.title");
  const description = t("seo.services.description");
  const keywords = t("seo.services.keywords", { returnObjects: true });
  const canonicalPath = "/services";
  const alternates = { "x-default": "/services", en: "/services", ar: "/services" };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        canonicalPath={canonicalPath}
        alternates={alternates}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3C3C3C] mb-4">
            {t("servicesTitle")}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#9AA0A6] max-w-3xl mx-auto">
            {t("servicesSubtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <ServiceCard service={service} showDetails={true} />
            </div>
          ))}
        </div>

        {/* Consultation CTA */}
        <div className="bg-[#F0F9FF] rounded-2xl p-6 sm:p-8 md:p-10 text-center flex flex-col items-center gap-4 sm:gap-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3C3C3C]">
            {t("servicesSection.notSure")}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-[#9AA0A6] max-w-xl">
            {t("servicesSection.expertsHelp")}
          </p>
          <Link
            to="/contact"
            className="bg-[#00AEEF] hover:bg-[#0099cc] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-colors duration-200"
          >
            {t("servicesSection.scheduleConsultation")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
