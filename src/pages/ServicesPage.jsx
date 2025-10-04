// pages/ServicesPage.js
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/mockData";

const ServicesPage = () => {
  const { t, i18n } = useTranslation();
  const title = t("seo.services.title");
  const description = t("seo.services.description");
  const keywords = t("seo.services.keywords", { returnObjects: true });
  const canonicalPath = "/services";
  const alternates = { "x-default": "/services", en: "/services", ar: "/services" };
  return (
    <div className="min-h-screen bg-white">
      <SEO title={title} description={description} keywords={keywords} canonicalPath={canonicalPath} alternates={alternates} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#3C3C3C] mb-4">{t("servicesTitle")}</h1>
          <p className="text-xl text-[#9AA0A6] max-w-3xl mx-auto">
            {t("servicesSubtitle")}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} showDetails={true} />
          ))}
        </div>
        <div className="bg-[#F0F9FF] rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#3C3C3C] mb-4">{t("servicesSection.notSure")}</h3>
          <p className="text-[#9AA0A6] mb-6">{t("servicesSection.expertsHelp")}</p>
          <Link
            to="/contact"
            className="bg-[#00AEEF] hover:bg-[#0099cc] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-block"
          >
            {t("servicesSection.scheduleConsultation")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;