// components/sections/TestimonialsSection.js
import React from "react";
import { testimonials } from "../../data/mockData";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#3C3C3C] mb-4">What Our Clients Say</h2>
          <p className="text-xl text-[#9AA0A6]">Don't just take our word for it</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-8">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-[#9AA0A6] mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-[#3C3C3C]">{testimonial.name}</p>
                <p className="text-[#00AEEF]">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;