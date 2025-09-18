// pages/PortfolioPage.js
import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { portfolioProjects } from "../data/mockData";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#3C3C3C] mb-4">Our Portfolio</h1>
          <p className="text-xl text-[#9AA0A6] max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
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
            className="bg-[#1E3A8A] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#2547a3] transition-colors duration-200 inline-block"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;