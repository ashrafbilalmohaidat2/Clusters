// components/sections/ServicesPreview.js
import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../ServiceCard";
import { services } from "../../data/mockData";

const ServicesPreview = () => {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#3C3C3C] mb-4">Our Services</h2>
          <p className="text-xl text-[#9AA0A6]">Comprehensive solutions tailored to your specific needs</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {services.slice(0, 4).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="bg-[#1E3A8A] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#2547a3] transition-colors duration-200 inline-block"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;