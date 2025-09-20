// components/sections/StrengthsSection.js
import React from "react";
import { useTranslation } from "react-i18next";
import rocket from "../../assets/rocket.png";
import ontime from "../../assets/ontime.png";
import ongoingsupport from "../../assets/ongoingsupport.png";
const StrengthsSection = () => {
  const { t } = useTranslation();
  const strengths = [
    {
      title: t("strength1Title"),
      description: t("strength1Desc"),
      icon: <img src={rocket} alt={t("strength1Title") || "Rocket"} className="w-15 h-15 mx-auto" />
    },
    {
      title: t("strength2Title"),
      description: t("strength2Desc"),
      icon: <img src={ontime} alt={t("strength2Title") || "On Time"} className="w-15 h-15 mx-auto" />
    },
    {
      title: t("strength3Title"),
      description: t("strength3Desc"),
      icon: <img src={ongoingsupport} alt={t("strength3Title") || "Ongoing Support"} className="w-15 h-15 mx-auto" />
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#3C3C3C] mb-4">{t("strengthsTitle")}</h2>
          <p className="text-xl text-[#9AA0A6]">{t("strengthsSubtitle")}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <div key={index} className="text-center p-8 bg-[#F8FAFC] rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{strength.icon}</div>
              <h3 className="text-xl font-bold text-[#3C3C3C] mb-4">{strength.title}</h3>
              <p className="text-[#9AA0A6]">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;