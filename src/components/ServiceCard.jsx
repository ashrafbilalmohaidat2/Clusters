// components/ServiceCard.js
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ service, showDetails = false }) => {
  const { i18n, t } = useTranslation();
  const isAr = i18n.language === "ar";

  if (showDetails) {
    return (
      <div className="bg-white border border-[#C5C9CC] rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-start mb-6">
          <div className="w-30 h-30 mr-6">{service.icon}</div>
          <div>
            <h2 className="text-2xl font-bold text-[#3C3C3C] mb-2">{isAr ? service.title_ar : service.title}</h2>
            <p className="text-[#9AA0A6]">{isAr ? service.description_ar : service.description}</p>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-[#3C3C3C] mb-3">{t("deliverables")}</h3>
            <ul className="space-y-2">
              {(isAr ? service.deliverables_ar : service.deliverables).map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-[#00AEEF] rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#3C3C3C] mb-3">{t("technologies")}</h3>
            <div className="flex flex-wrap gap-2">
              {(isAr ? service.technologies_ar : service.technologies).map((tech, index) => (
                <span key={index} className="bg-[#F0F9FF] text-[#00AEEF] text-sm px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-[#C5C9CC]">
            <div className="font-bold text-[#00AEEF] text-xl">{service.pricing}</div>
            <Link
              to="/contact"
              className="bg-[#00AEEF] hover:bg-[#0099cc] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              {t("getQuote")}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="mb-6">{service.icon}</div>
      <h3 className="text-xl font-bold text-[#3C3C3C] mb-3">{isAr ? service.title_ar : service.title}</h3>
      <p className="text-[#9AA0A6] mb-4">{isAr ? service.description_ar : service.description}</p>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-[#00AEEF]">{service.pricing}</span>
        <Link
          to="/services"
          className="text-[#1166d5] px-2 rounded-lg font-medium transition-colors duration-200"
        >
          {t("learnMore")}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;