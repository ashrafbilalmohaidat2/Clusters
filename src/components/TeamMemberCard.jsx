// components/TeamMemberCard.js
import React from "react";
import { useTranslation } from "react-i18next";

const TeamMemberCard = ({ member }) => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  return (
    <div className="text-center">
      <div className="relative mb-6">
        <img 
          src={member.image} 
          alt={isAr ? member.name_ar : member.name}
          className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-md"
          loading="lazy"
        />
      </div>
  <h3 className="text-xl font-bold text-gray-700 mb-2">{isAr ? member.name_ar : member.name}</h3>
  <p className="text-primary font-medium mb-3">{isAr ? member.role_ar : member.role}</p>
  <p className="text-muted">{isAr ? member.bio_ar : member.bio}</p>
    </div>
  );
};

export default TeamMemberCard;