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

  return (
    <div className="min-h-screen bg-white">
      <SEO title={title} description={description} keywords={keywords} jsonLd={jsonLd} canonicalPath={canonicalPath} alternates={alternates} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className={`text-center mb-10 ${isAr ? 'md:text-right' : 'md:text-left'}`}>
          <h1 className="text-4xl font-bold text-[#3C3C3C] mb-4">{t("page.uiux.h1")}</h1>
          <p className="text-xl text-[#9AA0A6]">{t("page.uiux.intro")}</p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#3C3C3C] mb-3">{t("page.uiux.h2a")}</h2>
          <p className="text-[#3C3C3C]">{t("page.uiux.p2a")}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#3C3C3C] mb-3">{t("page.uiux.h2b")}</h2>
          <h3 className="text-xl font-semibold text-[#3C3C3C] mb-2">{t("page.uiux.h3b")}</h3>
          <p className="text-[#3C3C3C]">{t("page.uiux.p2b")}</p>
        </section>
      </div>
    </div>
  );
};

export default UIUXDesign;


