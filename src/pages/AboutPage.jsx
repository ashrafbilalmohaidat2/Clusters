// pages/AboutPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import TeamMemberCard from "../components/TeamMemberCard";
import { teamMembers } from "../data/mockData";
import certificate from "../assets/certificate.png";
import expertsImg from "../assets/expertsImg.png";
import partner from "../assets/partner.png";

const AboutPage = () => {
  const navigate = useNavigate();

  const partnerships = [
    { icon: <img src={partner} alt="partner" className="w-15 h-15 mx-auto" />, title: "Partnership", description: "We have established partnerships with leading tech companies." },
    { icon: <img src={certificate} alt="Certificate" className="w-15 h-15 mx-auto" />, title: "AWS Certified", description: "Multiple team members hold AWS certifications for cloud architecture." },
    { icon: <img src={expertsImg} alt="Experts" className="w-15 h-15 mx-auto" />, title: "Shopify Experts", description: "Official Shopify Experts with proven track record of successful implementations." },
  ];

  const coreValues = [
    { title: "Excellence", description: "We strive for perfection in everything we do, from code quality to client communication." },
    { title: "Innovation", description: "We embrace new technologies and approaches to deliver cutting-edge solutions." },
    { title: "Collaboration", description: "We believe the best results come from working together with our clients and team." },
    { title: "Integrity", description: "We operate with honesty and transparency in all our business relationships." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#3C3C3C] mb-4">About Clusters</h1>
          <p className="text-xl text-[#9AA0A6] max-w-3xl mx-auto">
            We're a team of passionate developers and designers committed to creating exceptional digital experiences.
          </p>
        </div>

        {/* Vision Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#00AEEF] to-[#1E3A8A] rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl leading-relaxed">
              To be the most trusted digital partner for businesses worldwide, delivering innovative solutions that drive growth and create lasting value. We believe technology should empower, not complicate, and we're dedicated to making digital transformation accessible to organizations of all sizes.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#3C3C3C] mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#3C3C3C] mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} className="text-center p-6 bg-[#F8FAFC] rounded-xl">
                <h3 className="text-xl font-bold text-[#3C3C3C] mb-3">{value.title}</h3>
                <p className="text-[#9AA0A6]">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partnerships Section */}
        <section>
          <h2 className="text-3xl font-bold text-[#3C3C3C] mb-8 text-center">Partnerships & Certifications</h2>
          <div className="bg-[#efeff0] rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {partnerships.map((p, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl mb-4">{p.icon}</div>
                  <h3 className="text-lg font-bold text-[#3C3C3C] mb-2">{p.title}</h3>
                  <p className="text-[#9AA0A6]">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#1E3A8A] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#2547a3] transition-colors duration-200"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
