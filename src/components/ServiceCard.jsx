// components/ServiceCard.js
import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service, showDetails = false }) => {
  if (showDetails) {
    return (
      <div className="bg-white border border-[#C5C9CC] rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-start mb-6">
          <div className="text-4xl mr-4 w-30">{service.icon}</div>
          <div>
            <h2 className="text-2xl font-bold text-[#3C3C3C] mb-2">{service.title}</h2>
            <p className="text-[#9AA0A6]">{service.description}</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-[#3C3C3C] mb-3">Deliverables</h3>
            <ul className="space-y-2">
              {service.deliverables.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-[#00AEEF] rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-[#3C3C3C] mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, index) => (
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
              className="bg-[#00AEEF] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#2547a3] transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="text-3xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold text-[#3C3C3C] mb-3">{service.title}</h3>
      <p className="text-[#9AA0A6] mb-4">{service.description}</p>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-[#00AEEF]">{service.pricing}</span>
        <Link
          to="/services"
          className="text-[#1E3A8A] hover:text-[#2547a3] font-medium"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;