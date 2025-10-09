import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ service, showDetails = false }) => {
  const { i18n, t } = useTranslation();
  const isAr = i18n.language === "ar";

  const getServiceLink = () => {
    const lower = (service.title || "").toLowerCase();
    if (isAr) {
      if (lower.includes("cloud") || lower.includes("devops"))
        return "/خدمات-هندسة-السحابة-ودفوبس";
      if (lower.includes("ui") || lower.includes("ux"))
        return "/خدمات-تصميم-واجهات-وتجربة-المستخدم";
      if (lower.includes("web")) return "/خدمات-تطوير-الويب";
    } else {
      if (lower.includes("cloud") || lower.includes("devops"))
        return "/cloud-devops-services";
      if (lower.includes("ui") || lower.includes("ux"))
        return "/ui-ux-design-services";
      if (lower.includes("web")) return "/web-development-services";
    }
    return "/services";
  };

  // 🧩 Full Detailed Card
  if (showDetails) {
    return (
      <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        {/* Header */}
        <div
            className={`flex flex-col sm:flex-row items-center mb-8 sm:items-start ${
              isAr ? "text-right" : "text-left"
            }`}
          >
            <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-0">
              {service.icon}
            </div>
            <div className={`${isAr ? "sm:mr-6" : "sm:ml-6"} w-full sm:w-auto`}>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-3">
                {isAr ? service.title_ar : service.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                {isAr ? service.description_ar : service.description}
              </p>
            </div>
          </div>


        {/* Details */}
        <div className="space-y-8">
          {/* Deliverables */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 text-lg">
              {t("deliverables")}
            </h3>
            <ul
              className={`list-disc list-inside space-y-2 text-gray-700 leading-relaxed ${
                isAr ? "text-right" : "text-left"
              }`}
            >
              {(isAr ? service.deliverables_ar : service.deliverables).map(
                (item) => (
                  <li key={item}>{item}</li>
                )
              )}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 text-lg">
              {t("technologies")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {(isAr ? service.technologies_ar : service.technologies).map(
                (tech) => (
                  <span
                    key={tech}
                    className="inline-block bg-gradient-to-r from-[#7bbbe6] to-[#a3d5f7] text-gray-800 text-xs sm:text-sm font-semibold px-4 py-1 rounded-full border border-[#7bbbe6]/40 shadow-sm uppercase tracking-wide hover:shadow-md transition-all duration-200"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-[#7bbbe6]/50 gap-4">
            <div className="font-bold text-primary text-xl sm:text-2xl">
              {service.pricing}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#7bbbe6] to-[#4fa8dc] hover:opacity-90 text-gray-800 px-8 py-3 rounded-xl font-bold transition-transform duration-300 text-center w-full sm:w-auto hover:scale-105 shadow-md"
              >
                {t("getQuote")}
              </Link>

              <Link
                to={getServiceLink()}
                className="bg-gradient-to-r from-[#7bbbe6] to-[#4fa8dc] hover:opacity-90 text-gray-800 px-8 py-3 rounded-xl font-bold transition-transform duration-300 text-center w-full sm:w-auto hover:scale-105 shadow-md"
              >
                {t("viewDetails")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 🧱 Compact Card (Preview Mode)
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between h-full">
      <div>
        <div className="mb-6">{service.icon}</div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
          {isAr ? service.title_ar : service.title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg">
          {isAr ? service.description_ar : service.description}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-auto">
        <span className="font-semibold text-primary text-lg sm:text-xl">
          {service.pricing}
        </span>
        <Link
          to={getServiceLink()}
          className="text-[#1166d5] hover:text-primary font-semibold transition-colors duration-200 text-base sm:text-lg hover:underline"
        >
          {t("learnMore")}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
