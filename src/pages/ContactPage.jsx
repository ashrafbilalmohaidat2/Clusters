// pages/ContactPage.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";
import ContactForm from "../components/forms/ContactForm";
import ContactInfo from "../components/ContactInfo";

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      service: "",
    });
    
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { t } = useTranslation();
  const title = t("seo.contact.title");
  const description = t("seo.contact.description");
  const keywords = t("seo.contact.keywords", { returnObjects: true });
  const canonicalPath = "/contact";
  const alternates = { "x-default": "/contact", en: "/contact", ar: "/contact" };
  return (
    <div className="min-h-screen bg-white">
      <SEO title={title} description={description} keywords={keywords} canonicalPath={canonicalPath} alternates={alternates} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#3C3C3C] mb-4">{t("contactTitle")}</h1>
          <p className="text-xl text-[#9AA0A6] max-w-3xl mx-auto">
            {t("contactSubtitle")}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm 
            formSubmitted={formSubmitted}
            formData={formData}
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            setFormSubmitted={setFormSubmitted}
          />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;