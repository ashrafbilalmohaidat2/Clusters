// components/forms/ContactForm.js
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { services } from "../../data/mockData";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mldwykdg"); // استبدل بالـ ID تبعك

  if (state.succeeded) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8 text-center py-8">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-[#3C3C3C] mb-4">Thank You!</h3>
        <p className="text-[#9AA0A6] mb-6">
          Your message has been sent successfully. We'll get back to you within 24 hours.
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
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-[#C5C9CC] rounded-lg 
              focus:ring-2 focus:ring-[#00AEEF] focus:border-[#00AEEF]"
              placeholder="Your full name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#3C3C3C] mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-[#C5C9CC] rounded-lg 
              focus:ring-2 focus:ring-[#00AEEF] focus:border-[#00AEEF]"
              placeholder="your.email@example.com"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#3C3C3C] mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 border border-[#C5C9CC] rounded-lg 
              focus:ring-2 focus:ring-[#00AEEF] focus:border-[#00AEEF]"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          {/* Service */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-[#3C3C3C] mb-2">
              Service Interested In *
            </label>
            <select
              id="service"
              name="service"
              required
              className="w-full px-4 py-3 border border-[#C5C9CC] rounded-lg 
              focus:ring-2 focus:ring-[#00AEEF] focus:border-[#00AEEF]"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.id} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
            <ValidationError prefix="Service" field="service" errors={state.errors} />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#3C3C3C] mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              className="w-full px-4 py-3 border border-[#C5C9CC] rounded-lg 
              focus:ring-2 focus:ring-[#00AEEF] focus:border-[#00AEEF]"
              placeholder="Tell us about your project, timeline, and any specific requirements..."
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-[#1E3A8A] text-white py-3 px-6 rounded-lg font-medium 
            hover:bg-[#2547a3] transition-colors duration-200 disabled:opacity-50"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
