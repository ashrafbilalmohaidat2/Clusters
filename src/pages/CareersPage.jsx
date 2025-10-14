import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";

const CareersPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const whyWorkWithUs = [
    { title: t("careers.flexibleWork"), desc: t("careers.flexibleWorkDesc") },
    { title: t("careers.professionalGrowth"), desc: t("careers.professionalGrowthDesc") },
    { title: t("careers.competitiveComp"), desc: t("careers.competitiveCompDesc") },
    { title: t("careers.innovativeProjects"), desc: t("careers.innovativeProjectsDesc") }
  ];

  const currentOpenings = [
    {
      title: t("careers.seniorFrontend"),
      requirements: [t("careers.req1_1"), t("careers.req1_2"), t("careers.req1_3")],
      location: t("careers.remote")
    },
    {
      title: t("careers.uiuxDesigner"),
      requirements: [t("careers.req2_1"), t("careers.req2_2"), t("careers.req2_3")],
      location: t("careers.hybridNYC")
    },
    {
      title: t("careers.devopsEngineer"),
      requirements: [t("careers.req3_1"), t("careers.req3_2"), t("careers.req3_3")],
      location: t("careers.remote")
    }
  ];

  const handleApply = () => {
    navigate("/contact");
  };

  const title = t("seo.careers.title");
  const description = t("seo.careers.description");
  const keywords = t("seo.careers.keywords", { returnObjects: true });
  const canonicalPath = "/careers";
  const alternates = { "x-default": "/careers", en: "/careers", ar: "/careers" };
  return (
    <div className="min-h-screen bg-white">
      <SEO title={title} description={description} keywords={keywords} canonicalPath={canonicalPath} alternates={alternates} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#3C3C3C] mb-4">{t("careers.joinTeam")}</h1>
          <p className="text-xl text-[#9AA0A6] max-w-3xl mx-auto">
            {t("careers.intro")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-[#3C3C3C] mb-6">{t("careers.whyWork")}</h2>
            <div className="space-y-6">
              {whyWorkWithUs.map((item) => (
                <div key={item.title} className="border-l-4 border-[#00AEEF] pl-4">
                  <h3 className="font-semibold text-[#3C3C3C]">{item.title}</h3>
                  <p className="text-[#9AA0A6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3C3C3C] mb-6">{t("careers.currentOpenings")}</h2>
            <div className="space-y-6">
              {currentOpenings.map((job) => (
                <div key={job.title} className="border rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-[#3C3C3C]">{job.title}</h3>
                    <span className="bg-[#F0F9FF] text-[#00AEEF] text-sm px-3 py-1 rounded-full">{job.location}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {job.requirements.map((req) => (
                      <li key={req} className="flex items-center text-[#9AA0A6]">
                        <span className="w-2 h-2 bg-[#00AEEF] rounded-full mr-3"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={handleApply}
                    className="w-full bg-[#00AEEF] hover:bg-[#0099cc] text-white py-3 px-8 rounded-lg font-medium transition-colors duration-200"
                  >
                    {t("careers.applyNow")}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#F0F9FF] rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-[#3C3C3C] mb-4">{t("careers.noPerfectRole")}</h2>
          <p className="text-[#9AA0A6] mb-6">{t("careers.sendResume")}</p>
          <button
            onClick={handleApply}
            className="bg-[#00AEEF] hover:bg-[#0099cc] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            {t("careers.submitResume")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;