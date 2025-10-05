import React from "react";
import SEO from "../components/SEO";
import { useTranslation } from "react-i18next";

const CloudDevOps = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const title = t("seo.cloud.title");
  const description = t("seo.cloud.description");
  const keywords = t("seo.cloud.keywords", { returnObjects: true });
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cloud Engineering & DevOps Services",
    provider: {
      "@type": "Organization",
      name: "Clusters",
    },
    areaServed: "Worldwide",
    serviceType: "Cloud & DevOps",
    description,
  };

  const canonicalPath = isAr ? "/خدمات-هندسة-السحابة-ودفوبس" : "/cloud-devops-services";
  const alternates = {
    "x-default": "/cloud-devops-services",
    en: "/cloud-devops-services",
    ar: "/خدمات-هندسة-السحابة-ودفوبس"
  };

  // DevOps Infinity Symbol Component
  const DevOpsInfinitySymbol = () => (
    <div className="relative w-16 h-16 mx-auto mb-6 ">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d="M20 50 Q20 20, 50 20 Q80 20, 80 50 Q80 80, 50 80 Q20 80, 20 50"
          stroke="url(#devopsGradient)"
          strokeWidth="3"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M30 50 Q30 30, 50 30 Q70 30, 70 50 Q70 70, 50 70 Q30 70, 30 50"
          stroke="url(#devopsGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
        <circle cx="50" cy="30" r="3" fill="#FF0000" className="animate-ping" />
        <circle cx="70" cy="50" r="3" fill="#FF0000" className="animate-ping" style={{ animationDelay: '0.3s' }} />
        <circle cx="50" cy="70" r="3" fill="#FF0000" className="animate-ping" style={{ animationDelay: '0.6s' }} />
        <circle cx="30" cy="50" r="3" fill="#FF0000" className="animate-ping" style={{ animationDelay: '0.9s' }} />
        <defs>
          <linearGradient id="devopsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#66D9EF" />
            <stop offset="50%" stopColor="#36C9C9" />
            <stop offset="100%" stopColor="#1A1A3A" />
          </linearGradient>
        </defs>
      </svg>
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

  // Floating Cube Component
  const FloatingCube = ({ className = "" }) => (
    <div className={`absolute ${className}`}>
      <div className="w-6 h-6 bg-gradient-to-br from-[#66D9EF] to-[#36C9C9] opacity-60 transform rotate-45 animate-float-slow">
        <div className="w-full h-full bg-gradient-to-br from-[#66D9EF] to-[#36C9C9] opacity-40 transform rotate-45"></div>
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
      <FloatingCube className="top-32 right-32" />
      <FloatingCube className="bottom-32 left-32" />
      <FloatingCube className="top-60 left-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <header className={`mb-16 bg-white rounded-3xl p-12 border border-[#66D9EF]/20 shadow-2xl ${isAr ? 'text-right' : 'text-left'} relative overflow-hidden`}>
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#66D9EF] to-transparent animate-pulse"></div>
          </div>
          
          <div className="relative z-10">
            <DevOpsInfinitySymbol />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#1A1A3A] via-[#66D9EF] to-[#36C9C9] bg-clip-text text-transparent mb-6 leading-tight">
              {t("page.cloud.h1")}
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
              {t("page.cloud.intro")}
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
              {t("page.cloud.serviceOverview.title")}
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">{t("page.cloud.serviceOverview.description")}</p>
            
            <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ${isAr ? 'text-right' : 'text-left'}`}>
              {(Array.isArray(t("page.cloud.serviceOverview.features", { returnObjects: true })) ? t("page.cloud.serviceOverview.features", { returnObjects: true }) : []).map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white border border-[#66D9EF]/20 rounded-2xl p-6 text-[#1A1A3A] hover:border-[#66D9EF]/40 hover:shadow-lg hover:shadow-[#66D9EF]/10 transition-all duration-300 group">
                  <div className={`flex items-start`}>
                    <span className={`inline-block bg-gradient-to-r from-[#66D9EF] to-[#36C9C9] text-white text-sm font-bold px-3 py-1 rounded-lg group-hover:scale-110 transition-transform duration-300 ${isAr ? 'ml-3' : 'mr-3'}`}>
                      {idx + 1}
                    </span>
                    <p className="text-gray-700 group-hover:text-[#1A1A3A] transition-colors duration-300 font-bold">{item}</p>
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
              {t("page.cloud.keyBenefits.title")}
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">{t("page.cloud.keyBenefits.description")}</p>
            
            <div className={`grid sm:grid-cols-2 gap-6 ${isAr ? 'text-right' : 'text-left'}`}>
              {(Array.isArray(t("page.cloud.keyBenefits.benefits", { returnObjects: true })) ? t("page.cloud.keyBenefits.benefits", { returnObjects: true }) : []).map((benefit, i) => (
                <div key={i} className={`flex items-start bg-gradient-to-br from-gray-50 to-white border border-[#36C9C9]/20 rounded-2xl p-6 hover:border-[#36C9C9]/40 hover:shadow-lg hover:shadow-[#36C9C9]/10 transition-all duration-300 group`}>
                  <div className={`h-3 w-3 rounded-full bg-gradient-to-r from-[#36C9C9] to-[#66D9EF] mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300 ${isAr ? 'ml-4' : 'mr-4'}`} />
                  <p className="text-gray-700 group-hover:text-[#1A1A3A] transition-colors duration-300 text-lg font-bold">{benefit}</p>
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
              {t("page.cloud.ourProcess.title")}
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">{t("page.cloud.ourProcess.description")}</p>
            
            <div className="space-y-6">
              {(Array.isArray(t("page.cloud.ourProcess.steps", { returnObjects: true }))
                ? t("page.cloud.ourProcess.steps", { returnObjects: true }): []).map((step, i) => (
                <div key={i} className="group">
                  <div className="flex items-start space-x-4 bg-gradient-to-br from-gray-50 to-white border border-[#66D9EF]/20 rounded-2xl p-6 transition-all duration-300 hover:border-[#66D9EF]/40 hover:shadow-lg hover:shadow-[#66D9EF]/10">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-r from-[#66D9EF] to-[#36C9C9] text-white flex items-center justify-center font-bold text-lg">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#1A1A3A] mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#178de1] via-[#36C9C9] to-[#178de1] text-white rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-2xl">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 to-transparent animate-pulse"></div>
            <FloatingCube className="top-4 right-4" />
            <FloatingCube className="bottom-4 left-4" />
          </div>
          
          <div className={`mb-6 md:mb-0 relative z-10 ${isAr ? 'md:text-right' : 'md:text-left'}`}>
            <h3 className="text-4xl font-bold mb-4">
              {t("page.cloud.cta.title")}
            </h3>
            <p className="text-xl text-white/90 leading-relaxed">{t("page.cloud.cta.subtitle")}</p>
          </div>
          
          <a 
            href="/contact" 
            className="bg-[#f9fbfc] text-[#178de1] px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20 relative z-10 group"
          >
            <span className="flex items-center">
              {t("page.cloud.cta.button")}
              <div className={`w-2 h-2 bg-[#178de1] rounded-full group-hover:animate-ping ${isAr ? 'mr-2' : 'ml-2'}`}></div>
            </span>
          </a>
        </section>
      </div>
    </div>
  );
};

export default CloudDevOps;