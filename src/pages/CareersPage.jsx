import React from "react";
import { useNavigate } from "react-router-dom";

const CareersPage = () => {
  const navigate = useNavigate();

  const whyWorkWithUs = [
    { title: "Flexible Work Environment", desc: "Remote or hybrid options with flexible hours to support work-life balance." },
    { title: "Professional Growth", desc: "Regular training, conferences, and mentorship programs to advance your career." },
    { title: "Competitive Compensation", desc: "Above-market salaries, bonuses, and comprehensive benefits package." },
    { title: "Innovative Projects", desc: "Work on cutting-edge technologies with clients across various industries." }
  ];

  const currentOpenings = [
    {
      title: "Senior Frontend Developer",
      requirements: ["5+ years React experience", "TypeScript proficiency", "State management expertise"],
      location: "Remote"
    },
    {
      title: "UI/UX Designer",
      requirements: ["Portfolio of design work", "Figma/Sketch expertise", "User research experience"],
      location: "Hybrid (NYC)"
    },
    {
      title: "DevOps Engineer",
      requirements: ["AWS/GCP experience", "CI/CD pipeline expertise", "Containerization skills"],
      location: "Remote"
    }
  ];

  const handleApply = () => {
    navigate("/contact"); // مثال: توجه لصفحة contact لتقديم الطلب
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#3C3C3C] mb-4">Join Our Team</h1>
          <p className="text-xl text-[#9AA0A6] max-w-3xl mx-auto">
            We're always looking for talented individuals who are passionate about technology and design. 
            If you're ready to make an impact, we'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-[#3C3C3C] mb-6">Why Work With Us</h2>
            <div className="space-y-6">
              {whyWorkWithUs.map((item, index) => (
                <div key={index} className="border-l-4 border-[#00AEEF] pl-4">
                  <h3 className="font-semibold text-[#3C3C3C]">{item.title}</h3>
                  <p className="text-[#9AA0A6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#3C3C3C] mb-6">Current Openings</h2>
            <div className="space-y-6">
              {currentOpenings.map((job, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-[#3C3C3C]">{job.title}</h3>
                    <span className="bg-[#F0F9FF] text-[#00AEEF] text-sm px-3 py-1 rounded-full">{job.location}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-center text-[#9AA0A6]">
                        <span className="w-2 h-2 bg-[#00AEEF] rounded-full mr-3"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={handleApply}
                    className="w-full bg-[#1E3A8A] text-white py-2 rounded-lg font-medium hover:bg-[#2547a3] transition-colors duration-200"
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#F0F9FF] rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-[#3C3C3C] mb-4">Don't see your perfect role?</h2>
          <p className="text-[#9AA0A6] mb-6">We're always interested in meeting talented individuals. Send us your resume!</p>
          <button
            onClick={handleApply}
            className="bg-[#00AEEF] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0099cc] transition-colors duration-200"
          >
            Submit Your Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
