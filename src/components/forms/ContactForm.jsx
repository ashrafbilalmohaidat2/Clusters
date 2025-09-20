// components/forms/ContactForm.js
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { services } from "../../data/mockData";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mldwykdg");
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  if (state.succeeded) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8 text-center py-8">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-[#3C3C3C] mb-4">{isAr ? "شكرًا لك!" : "Thank You!"}</h3>
        <p className="text-[#9AA0A6] mb-6">
          {isAr
            ? "تم إرسال رسالتك بنجاح. سنرد عليك خلال 24 ساعة."
            : "Your message has been sent successfully. We'll get back to you within 24 hours."}
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white rounded-xl shadow-md p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#3C3C3C] mb-2">
              {t("fullName")} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-[#C5C9CC] rounded-lg 
              focus:ring-2 focus:ring-[#00AEEF] focus:border-[#00AEEF]"
              placeholder={isAr ? "الاسم الكامل" : "Full Name"}
            />
            <ValidationError prefix={t("fullName")} field="name" errors={state.errors} />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#3C3C3C] mb-2">
              {t("emailAddress")} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-[#C5C9CC] rounded-lg 
              focus:ring-2 focus:ring-[#00AEEF] focus:border-[#00AEEF]"
              placeholder={isAr ? "البريد الإلكتروني" : "Email Address"}
            />
            <ValidationError prefix={t("emailAddress")} field="email" errors={state.errors} />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#3C3C3C] mb-2">
              {t("phoneNumber")}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 border border-[#C5C9CC] rounded-lg 
              focus:ring-2 focus:ring-[#00AEEF] focus:border-[#00AEEF]"
              placeholder={isAr ? "رقم الهاتف" : "Phone Number"}
            />
          </div>

          {/* Service */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-[#3C3C3C] mb-2">
              {t("serviceInterest")} *
            </label>
            <select
              id="service"
              name="service"
              required
              className="w-full px-4 py-3 border border-[#C5C9CC] rounded-lg 
              focus:ring-2 focus:ring-[#00AEEF] focus:border-[#00AEEF]"
            >
              <option value="">{t("selectService")}</option>
              {services.map((service) => (
                <option key={service.id} value={isAr ? service.title_ar : service.title}>
                  {isAr ? service.title_ar : service.title}
                </option>
              ))}
            </select>
            <ValidationError prefix={t("serviceInterest")} field="service" errors={state.errors} />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#3C3C3C] mb-2">
              {t("message")} *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              className="w-full px-4 py-3 border border-[#C5C9CC] rounded-lg 
              focus:ring-2 focus:ring-[#00AEEF] focus:border-[#00AEEF]"
              placeholder={isAr ? "اكتب رسالتك هنا" : "Type your message here"}
            ></textarea>
            <ValidationError prefix={t("message")} field="message" errors={state.errors} />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-[#00AEEF] hover:bg-[#0099cc] text-white py-3 px-8 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50"
          >
            {state.submitting
              ? (isAr ? "جاري الإرسال..." : "Sending...")
              : (isAr ? "إرسال" : "Send")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
