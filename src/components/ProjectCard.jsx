// components/ProjectCard.js
import React from "react";
import { useTranslation } from "react-i18next";

  
const ProjectCard = React.memo(({ project }) => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
        <img 
          src={project.image} 
          alt={isAr ? project.title_ar : project.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <button className="opacity-0 group-hover:opacity-100 bg-white text-primary px-6 py-2 rounded-lg font-medium transition-opacity duration-300 hover:cursor-pointer" aria-label={t("viewDetails") || "View Details"}>
            {t("viewDetails")}
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold text-secondary">{isAr ? project.title_ar : project.title}</h3>
        <p className="text-primary">{isAr ? project.category_ar : project.category}</p>
      </div>
    </div>
  );
});

export default ProjectCard;