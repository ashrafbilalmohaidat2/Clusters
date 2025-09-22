// components/ServiceCard.js
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ service, showDetails = false }) => {
  const { i18n, t } = useTranslation();
  const isAr = i18n.language === "ar";

  if (showDetails) {
    return (
  <div className="bg-white border border-gray-300 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-start mb-6">
          <div className="w-30 h-30 mr-6">{service.icon}</div>
          <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">{isAr ? service.title_ar : service.title}</h2>
            <p className="text-muted">{isAr ? service.description_ar : service.description}</p>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-700 mb-3">{t("deliverables")}</h3>
            <ul className={`list-disc list-inside space-y-2 ml-2 marker:text-primary ${isAr ? 'text-right' : 'text-left'}`}> 
              {(isAr ? service.deliverables_ar : service.deliverables).map((item) => (
                <li key={item} className="pl-1 text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-3">{t("technologies")}</h3>
            <div className="flex flex-wrap gap-2">
              {(isAr ? service.technologies_ar : service.technologies).map((tech) => (
                <span key={tech} className="inline-block bg-[#7bbbe6] text-primary text-xs font-semibold px-4 py-1 rounded-full border border-[#7bbbe6] shadow-sm uppercase tracking-wide">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-[#7bbbe6]">
            <div className="font-bold text-primary text-xl">{service.pricing}</div>
            <Link
              to="/contact"
              className="bg-[#7bbbe6] hover:bg-primary/80 text-gray-700 px-8 py-3 rounded-lg font-bold transition-colors duration-200"
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
  <h3 className="text-xl font-bold text-gray-700 mb-3">{isAr ? service.title_ar : service.title}</h3>
  <p className="text-muted mb-4">{isAr ? service.description_ar : service.description}</p>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-primary">{service.pricing}</span>
        <Link
          to="/services"
          className="text-[#1166d5] hover:text-primary px-2 rounded-lg font-medium transition-colors duration-200"
        >
          {t("learnMore")}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;