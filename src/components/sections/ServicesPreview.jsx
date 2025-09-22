// components/sections/ServicesPreview.js
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ServiceCard from "../ServiceCard";
import { services } from "../../data/mockData";

const ServicesPreview = () => {
  const { t } = useTranslation();
  return (
  <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-gray-700 mb-2">{t("servicesTitle")}</h2>
          <p className="text-xl text-muted">{t("servicesSubtitle")}</p>
        </div>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 text-center">
          {services.slice(0, 4).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
  <div className="text-center mt-4">
          <Link
            to="/services"
            className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 inline-block"
          >
            {t("viewAllServices")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;