// pages/ServicesPage.js
import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/mockData";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#3C3C3C] mb-4">Our Services</h1>
          <p className="text-xl text-[#9AA0A6] max-w-3xl mx-auto">
            Comprehensive digital solutions designed to help your business grow and succeed in the digital landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} showDetails={true} />
          ))}
        </div>
        
        <div className="bg-[#F0F9FF] rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#3C3C3C] mb-4">Not sure which service you need?</h3>
          <p className="text-[#9AA0A6] mb-6">Our experts can help you determine the best solution for your business.</p>
          <Link
            to="/contact"
            className="bg-[#00AEEF] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#0099cc] transition-colors duration-200 inline-block"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;