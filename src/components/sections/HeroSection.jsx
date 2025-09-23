// components/sections/HeroSection.js
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <section className="text-white relative h-screen w-full overflow-hidden bg-[#313131]">
       {/* Background video */}
       <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="heroSection.mp4" type="video/mp4" />
      </video>

      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-8 items-center w-full">

          {/* Text Section */}
          <div className={`text-center ${isAr ? 'md:text-right' : 'md:text-left'}`}>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 leading-snug font-sans !text-white">
              {t("heroTitle")}
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-white font-sans font-bold">
              {t("heroSubtitle")}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 ${isAr ? 'items-end' : 'items-start'}`}> 
              <Link
                to="/contact"
                className="w-full md:w-auto bg-[#00AEEF] hover:bg-[#0099cc] text-white font-medium py-3 sm:py-4 px-8 rounded-lg transition-colors duration-200 text-center"
              >
                {t("consultationBtn")}
              </Link>
              <Link
                to="/services"
                className="w-full md:w-auto border-2 border-white hover:bg-white hover:text-[#00AEEF] font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors duration-200 text-center"
              >
                {t("servicesBtn")}
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 max-w-full">
              <img
                src="clusterslogo.png"
                alt={(t("heroTitle") || "Clusters") + " hero visual"}
                className="rounded-lg w-64 sm:w-80 md:w-96 lg:w-[28rem] object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
