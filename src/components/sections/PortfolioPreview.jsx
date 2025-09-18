// components/sections/PortfolioPreview.js
import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../ProjectCard";
import { portfolioProjects } from "../../data/mockData";

const PortfolioPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#3C3C3C] mb-4">Featured Projects</h2>
          <p className="text-xl text-[#9AA0A6]">See how we've helped businesses achieve their digital goals</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioProjects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="bg-[#1E3A8A] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#2547a3] transition-colors duration-200 inline-block"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;