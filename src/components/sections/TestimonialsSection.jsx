// components/sections/TestimonialsSection.js
import React from "react";
import { useTranslation } from "react-i18next";
import { testimonials } from "../../data/mockData";

const TestimonialsSection = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  return (
  <section className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">{t("testimonialsTitle")}</h2>
          <p className="text-xl text-muted">{t("testimonialsSubtitle")}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white rounded-xl shadow-md p-8">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-muted mb-6 italic">"{isAr ? testimonial.quote_ar : testimonial.quote}"</p>
              <div>
                <p className="font-bold text-gray-700">{isAr ? testimonial.name_ar : testimonial.name}</p>
                <p className="text-primary">{isAr ? testimonial.company_ar : testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;