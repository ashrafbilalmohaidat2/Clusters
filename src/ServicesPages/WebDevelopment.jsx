import React from "react";
import SEO from "../components/SEO";
import { useTranslation } from "react-i18next";

const WebDevelopment = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const title = t("seo.webDev.title");
  const description = t("seo.webDev.description");
  const keywords = t("seo.webDev.keywords", { returnObjects: true });
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Development Services",
    provider: {
      "@type": "Organization",
      name: "Clusters",
    },
    areaServed: "Worldwide",
    serviceType: "Web Development",
    description,
  };

  const canonicalPath = isAr ? "/خدمات-تطوير-الويب" : "/web-development-services";
  const alternates = {
    "x-default": "/web-development-services",
    en: "/web-development-services",
    ar: "/خدمات-تطوير-الويب"
  };

  // Web Development Icon Component
  const WebDevIcon = () => (
    <div className="relative w-16 h-16 mx-auto mb-6">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="20" y="30" width="60" height="40" rx="4" fill="url(#webGradient)" stroke="url(#webGradient)" strokeWidth="2" className="animate-pulse" />
        <rect x="25" y="35" width="50" height="30" rx="2" fill="white" opacity="0.9" />
        <circle cx="35" cy="45" r="2" fill="#66D9EF" className="animate-ping" />
        <circle cx="45" cy="45" r="2" fill="#36C9C9" className="animate-ping" style={{ animationDelay: '0.3s' }} />
        <circle cx="55" cy="45" r="2" fill="#66D9EF" className="animate-ping" style={{ animationDelay: '0.6s' }} />
        <rect x="30" y="55" width="40" height="2" fill="url(#webGradient)" className="animate-pulse" />
        <defs>
          <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#66D9EF" />
            <stop offset="50%" stopColor="#36C9C9" />
            <stop offset="100%" stopColor="#1A1A3A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

  // Floating Code Component
  const FloatingCode = ({ className = "" }) => (
    <div className={`absolute ${className}`}>
      <div className="w-8 h-8 bg-gradient-to-br from-[#66D9EF] to-[#36C9C9] opacity-60 transform rotate-45 animate-float-slow">
        <div className="w-full h-full bg-gradient-to-br from-[#66D9EF] to-[#36C9C9] opacity-40 transform rotate-45"></div>
      </div>
    </div>
  );

  // Floating Cloud Component
  const FloatingCloud = ({ className = "" }) => (
    <div className={`absolute ${className}`}>
      <div className="relative">
        <div className="w-12 h-8 bg-gradient-to-r from-[#36C9C9] to-[#66D9EF] rounded-full opacity-80 animate-float">
          <div className="absolute -top-2 left-2 w-6 h-6 bg-gradient-to-r from-[#36C9C9] to-[#66D9EF] rounded-full"></div>
          <div className="absolute -top-1 right-2 w-4 h-4 bg-gradient-to-r from-[#36C9C9] to-[#66D9EF] rounded-full"></div>
        </div>
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-r from-[#36C9C9] to-[#66D9EF] rounded-full opacity-60"></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <SEO title={title} description={description} keywords={keywords} jsonLd={jsonLd} canonicalPath={canonicalPath} alternates={alternates} />
      
      {/* Background Elements */}
      <FloatingCloud className="top-20 left-10" />
      <FloatingCloud className="top-40 right-20" />
      <FloatingCloud className="bottom-40 left-20" />
      <FloatingCode className="top-32 right-32" />
      <FloatingCode className="bottom-32 left-32" />
      <FloatingCode className="top-60 left-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <header className={`mb-16 bg-white rounded-3xl p-12 border border-[#66D9EF]/20 shadow-2xl ${isAr ? 'text-right' : 'text-left'} relative overflow-hidden`}>
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#66D9EF] to-transparent animate-pulse"></div>
          </div>
          
          <div className="relative z-10">
            <WebDevIcon />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#1A1A3A] via-[#66D9EF] to-[#36C9C9] bg-clip-text text-transparent mb-6 leading-tight">
              {t("page.webDev.h1")}
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
              {t("page.webDev.intro")}
            </p>
          </div>
        </header>

        {/* Service Overview */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl p-8 border border-[#66D9EF]/20 shadow-xl">
            <h2 className="text-3xl font-bold text-[#1A1A3A] mb-4 flex items-center">
              <div className={`w-8 h-8 bg-gradient-to-r from-[#66D9EF] to-[#36C9C9] rounded-full flex items-center justify-center ${isAr ? 'ml-4' : 'mr-4'}`}>
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              {t("page.webDev.serviceOverview.title")}
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">{t("page.webDev.serviceOverview.description")}</p>
            
            <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ${isAr ? 'text-right' : 'text-left'}`}>
              {(Array.isArray(t("page.webDev.serviceOverview.features", { returnObjects: true })) ? t("page.webDev.serviceOverview.features", { returnObjects: true }) : []).map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white border border-[#66D9EF]/20 rounded-2xl p-6 text-[#1A1A3A] hover:border-[#66D9EF]/40 hover:shadow-lg hover:shadow-[#66D9EF]/10 transition-all duration-300 group">
                  <div className={`flex items-start ${isAr ? 'flex-row-reverse' : 'flex-row'}`}>
                    <span className={`inline-block bg-gradient-to-r from-[#66D9EF] to-[#36C9C9] text-white text-sm font-bold px-3 py-1 rounded-lg group-hover:scale-110 transition-transform duration-300 ${isAr ? 'ml-3' : 'mr-3'}`}>
                      {idx + 1}
                    </span>
                    <p className="text-gray-700 group-hover:text-[#1A1A3A] transition-colors duration-300">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl p-8 border border-[#66D9EF]/20 shadow-xl">
            <h2 className="text-3xl font-bold text-[#1A1A3A] mb-4 flex items-center">
              <div className={`w-8 h-8 bg-gradient-to-r from-[#36C9C9] to-[#66D9EF] rounded-full flex items-center justify-center ${isAr ? 'ml-4' : 'mr-4'}`}>
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              {t("page.webDev.keyBenefits.title")}
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">{t("page.webDev.keyBenefits.description")}</p>
            
            <div className={`grid sm:grid-cols-2 gap-6 ${isAr ? 'text-right' : 'text-left'}`}>
              {(Array.isArray(t("page.webDev.keyBenefits.benefits", { returnObjects: true })) ? t("page.webDev.keyBenefits.benefits", { returnObjects: true }) : []).map((benefit, i) => (
                <div key={i} className={`flex items-start bg-gradient-to-br from-gray-50 to-white border border-[#36C9C9]/20 rounded-2xl p-6 hover:border-[#36C9C9]/40 hover:shadow-lg hover:shadow-[#36C9C9]/10 transition-all duration-300 group ${isAr ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`h-3 w-3 rounded-full bg-gradient-to-r from-[#36C9C9] to-[#66D9EF] mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300 ${isAr ? 'ml-4' : 'mr-4'}`} />
                  <p className="text-gray-700 group-hover:text-[#1A1A3A] transition-colors duration-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools and Technologies */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl p-8 border border-[#66D9EF]/20 shadow-xl">
            <h2 className="text-3xl font-bold text-[#1A1A3A] mb-4 flex items-center">
              <div className={`w-8 h-8 bg-gradient-to-r from-[#66D9EF] to-[#36C9C9] rounded-full flex items-center justify-center ${isAr ? 'ml-4' : 'mr-4'}`}>
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              {t("page.webDev.toolsTechnologies.title")}
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">{t("page.webDev.toolsTechnologies.description")}</p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(Array.isArray(t("page.webDev.toolsTechnologies.tools", { returnObjects: true })) ? t("page.webDev.toolsTechnologies.tools", { returnObjects: true }) : []).map((tool, i) => (
                <div key={i} className="bg-gradient-to-r from-[#66D9EF]/10 to-[#36C9C9]/10 border border-[#66D9EF]/30 text-[#1A1A3A] px-4 py-3 rounded-xl text-sm font-medium hover:from-[#66D9EF]/20 hover:to-[#36C9C9]/20 transition-all duration-300 hover:scale-105 text-center">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl p-8 border border-[#66D9EF]/20 shadow-xl">
            <h2 className="text-3xl font-bold text-[#1A1A3A] mb-4 flex items-center">
              <div className={`w-8 h-8 bg-gradient-to-r from-[#36C9C9] to-[#66D9EF] rounded-full flex items-center justify-center ${isAr ? 'ml-4' : 'mr-4'}`}>
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              {t("page.webDev.ourProcess.title")}
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">{t("page.webDev.ourProcess.description")}</p>
            
            <div className="space-y-6">
              {(Array.isArray(t("page.webDev.ourProcess.steps", { returnObjects: true })) ? t("page.webDev.ourProcess.steps", { returnObjects: true }) : []).map((step, i) => (
                <div key={i} className={`flex items-start ${isAr ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-12 h-12 bg-gradient-to-r from-[#66D9EF] to-[#36C9C9] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 ${isAr ? 'ml-6' : 'mr-6'}`}>
                    {i + 1}
                  </div>
                  <div className={`flex-1 ${isAr ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-xl font-semibold text-[#1A1A3A] mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#66D9EF] via-[#36C9C9] to-[#66D9EF] text-white rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-2xl">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 to-transparent animate-pulse"></div>
            <FloatingCode className="top-4 right-4" />
            <FloatingCode className="bottom-4 left-4" />
          </div>
          
          <div className={`mb-6 md:mb-0 relative z-10 ${isAr ? 'md:text-right' : 'md:text-left'}`}>
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#1A1A3A] bg-clip-text text-transparent">
              {t("page.webDev.cta.title")}
            </h3>
            <p className="text-xl text-white/90 leading-relaxed">{t("page.webDev.cta.subtitle")}</p>
          </div>
          
          <a 
            href="/contact" 
            className="bg-gradient-to-r from-[#1A1A3A] to-[#2A2A4A] hover:from-[#2A2A4A] hover:to-[#1A1A3A] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20 relative z-10 group"
          >
            <span className="flex items-center">
              {t("page.webDev.cta.button")}
              <div className={`w-2 h-2 bg-white rounded-full group-hover:animate-ping ${isAr ? 'mr-2' : 'ml-2'}`}></div>
            </span>
          </a>
        </section>
      </div>
    </div>
  );
};

export default WebDevelopment;


