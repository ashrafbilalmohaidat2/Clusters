// components/sections/ServicesPreview.js
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ServiceCard from "../ServiceCard";
import { services } from "../../data/mockData";

const ServicesPreview = () => {
  const { t } = useTranslation();
  return (
  <section className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-4">{t("servicesTitle")}</h2>
          <p className="text-xl text-muted">{t("servicesSubtitle")}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {services.slice(0, 4).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-block"
          >
            {t("viewAllServices")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;