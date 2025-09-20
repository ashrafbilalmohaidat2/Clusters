// components/sections/PortfolioPreview.js
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProjectCard from "../ProjectCard";
import { portfolioProjects } from "../../data/mockData";

const PortfolioPreview = () => {
  const { t } = useTranslation();
  return (
  <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-4">{t("portfolioTitle")}</h2>
          <p className="text-xl text-muted">{t("portfolioSubtitle")}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioProjects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-block"
          >
            {t("viewAllProjects")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;