import React from "react";
import SEO from "../components/SEO";
import { useTranslation } from "react-i18next";

const UIUXDesign = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const title = t("seo.uiux.title");
  const description = t("seo.uiux.description");
  const keywords = t("seo.uiux.keywords", { returnObjects: true });
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "UI/UX Design Services",
    provider: {
      "@type": "Organization",
      name: "Clusters",
    },
    areaServed: "Worldwide",
    serviceType: "UI/UX Design",
    description,
  };

  const canonicalPath = isAr ? "/خدمات-تصميم-واجهات-وتجربة-المستخدم" : "/ui-ux-design-services";
  const alternates = {
    "x-default": "/ui-ux-design-services",
    en: "/ui-ux-design-services",
    ar: "/خدمات-تصميم-واجهات-وتجربة-المستخدم"
  };

  // UI/UX Design Icon Component
  const UIUXIcon = () => (
    <div className="relative w-16 h-16 mx-auto mb-6">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="20" y="20" width="60" height="40" rx="8" fill="url(#uiuxGradient)" stroke="url(#uiuxGradient)" strokeWidth="2" className="animate-pulse" />
        <rect x="25" y="25" width="50" height="30" rx="4" fill="white" opacity="0.9" />
        <circle cx="35" cy="35" r="3" fill="#66D9EF" className="animate-ping" />
        <circle cx="50" cy="35" r="3" fill="#36C9C9" className="animate-ping" style={{ animationDelay: '0.3s' }} />
        <circle cx="65" cy="35" r="3" fill="#66D9EF" className="animate-ping" style={{ animationDelay: '0.6s' }} />
        <rect x="30" y="45" width="40" height="3" fill="url(#uiuxGradient)" className="animate-pulse" />
        <rect x="30" y="50" width="30" height="2" fill="url(#uiuxGradient)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <defs>
          <linearGradient id="uiuxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#66D9EF" />
            <stop offset="50%" stopColor="#36C9C9" />
            <stop offset="100%" stopColor="#1A1A3A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

  // Floating Design Component
  const FloatingDesign = ({ className = "" }) => (
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
      <FloatingDesign className="top-32 right-32" />
      <FloatingDesign className="bottom-32 left-32" />
      <FloatingDesign className="top-60 left-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <header className={`mb-16 bg-white rounded-3xl p-12 border border-[#66D9EF]/20 shadow-2xl ${isAr ? 'text-right' : 'text-left'} relative overflow-hidden`}>
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#66D9EF] to-transparent animate-pulse"></div>
          </div>
          
          <div className="relative z-10">
            <UIUXIcon />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#1A1A3A] via-[#66D9EF] to-[#36C9C9] bg-clip-text text-transparent mb-6 leading-tight">
              {t("page.uiux.h1")}
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
              {t("page.uiux.intro")}
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
              {t("page.uiux.serviceOverview.title")}
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">{t("page.uiux.serviceOverview.description")}</p>
            
            <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ${isAr ? 'text-right' : 'text-left'}`}>
              {(Array.isArray(t("page.uiux.serviceOverview.features", { returnObjects: true })) ? t("page.uiux.serviceOverview.features", { returnObjects: true }) : []).map((item, idx) => (
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
              {t("page.uiux.keyBenefits.title")}
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">{t("page.uiux.keyBenefits.description")}</p>
            
            <div className={`grid sm:grid-cols-2 gap-6 ${isAr ? 'text-right' : 'text-left'}`}>
              {(Array.isArray(t("page.uiux.keyBenefits.benefits", { returnObjects: true })) ? t("page.uiux.keyBenefits.benefits", { returnObjects: true }) : []).map((benefit, i) => (
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
              {t("page.uiux.ourProcess.title")}
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">{t("page.uiux.ourProcess.description")}</p>
            
            <div className="space-y-6">
              {(Array.isArray(t("page.uiux.ourProcess.steps", { returnObjects: true }))
                ? t("page.uiux.ourProcess.steps", { returnObjects: true }): []).map((step, i) => (
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

        {/* 
        Packages
        <section className="mb-16">
          <div className="bg-white rounded-4xl p-5 border border-[#66D9EF]/20 shadow-2xl">
            <h2 className="text-3xl font-extrabold text-[#1A1A3A] mb-6 flex items-center">
              <div className={`w-10 h-10 bg-gradient-to-r from-[#36C9C9] to-[#66D9EF] rounded-full flex items-center justify-center ${isAr ? 'ml-4' : 'mr-4'}`}>
                <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
              </div>
              {t("page.uiux.packages.title")}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{t("page.uiux.packages.note")}</p>
            <div className={`grid py-5 md:grid-cols-3 gap-10 ${isAr ? 'text-right' : 'text-left'}`}>
              
              {['basic', 'professional', 'advanced'].map((pkg) => (
                <div
                  key={pkg}
                  className={`relative overflow-hidden rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group
                    ${pkg === 'basic' ? 'bg-gradient-to-br from-[#66D9EF] to-[#36C9C9]' : pkg === 'professional' ? 'bg-gradient-to-br from-[#36C9C9] to-[#178de1]' : 'bg-gradient-to-br from-[#178de1] to-[#66D9EF]'}
                  `}
                >
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-12 -translate-y-12 animate-pulse-slow pointer-events-none"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full translate-x-16 translate-y-16 pointer-events-none"></div>

                  <h3 className="text-2xl font-extrabold mb-5 relative z-10">{t(`page.uiux.packages.${pkg}.title`)}</h3>
                  
                  <ul className="text-white/90 mb-6 leading-relaxed space-y-3 relative z-10">
                      {(() => {
                        const features = t(`page.uiux.packages.${pkg}.features`, { returnObjects: true });
                        if (Array.isArray(features)) {
                          return features.map((feature, idx) => (
                            <li
                              key={idx}
                              className={`relative pl-6 ${isAr ? 'pl-0 pr-6' : ''}`}
                            >
                              <span
                                className={`absolute top-2.5 ${isAr ? 'right-0' : 'left-0'} w-2.5 h-2.5 bg-white rounded-full animate-ping-slow`}
                              ></span>
                              {feature}
                            </li>
                          ));
                        } else {
                          return <li>No features available</li>;
                        }
                      })()}
                    </ul>

                  
                  <div className="text-3xl font-extrabold mb-6 relative z-10">{t(`page.uiux.packages.${pkg}.price`)}</div>
                  
                  <a
                    href="/contact"
                    className="w-full cursor-pointer bg-white text-gray-800 py-3 px-6 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block text-center relative z-10 shadow-md hover:shadow-lg"
                  >
                    {t('page.uiux.packages.getStarted')}
                  </a>
                </div>
              ))}

            </div>
          </div>
        </section> 
        */}

        <section className="bg-gradient-to-r from-[#178de1] via-[#36C9C9] to-[#178de1] text-white rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-2xl">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 to-transparent animate-pulse"></div>
            <FloatingDesign className="top-4 right-4" />
            <FloatingDesign className="bottom-4 left-4" />
          </div>
          
          <div className={`mb-6 md:mb-0 relative z-10 ${isAr ? 'md:text-right' : 'md:text-left'}`}>
            <h3 className="text-4xl font-bold mb-4">
              {t("page.uiux.cta.title")}
            </h3>
            <p className="text-xl text-white/90 leading-relaxed">{t("page.uiux.cta.subtitle")}</p>
          </div>
          
          <a 
            href="/contact" 
            className="bg-[#f9fbfc] text-[#178de1] px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20 relative z-10 group"
          >
            <span className="flex items-center">
              {t("page.uiux.cta.button")}
              <div className={`w-2 h-2 bg-[#178de1] rounded-full group-hover:animate-ping ${isAr ? 'mr-2' : 'ml-2'}`}></div>
            </span>
          </a>
        </section>
      </div>
    </div>
  );
};

export default UIUXDesign;


