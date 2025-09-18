// components/ProjectCard.js
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <button className="opacity-0 group-hover:opacity-100 bg-white text-[#00AEEF] px-6 py-2 rounded-lg font-medium transition-opacity duration-300">
            View Details
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold text-[#3C3C3C]">{project.title}</h3>
        <p className="text-[#00AEEF]">{project.category}</p>
      </div>
    </div>
  );
};

export default ProjectCard;