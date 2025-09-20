// pages/PortfolioPage.js
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProjectCard from "../components/ProjectCard";
import { portfolioProjects } from "../data/mockData";

const PortfolioPage = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#3C3C3C] mb-4">{t("portfolio")}</h1>
          <p className="text-xl text-[#9AA0A6] max-w-3xl mx-auto">
            {t("portfolioSubtitle")}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/contact"
            className="bg-[#00AEEF] hover:bg-[#0099cc] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-block"
          >
            {t("portfoliostartProject")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;