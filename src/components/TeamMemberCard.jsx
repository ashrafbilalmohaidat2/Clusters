// components/TeamMemberCard.js
import React from "react";

const TeamMemberCard = ({ member }) => {
  return (
    <div className="text-center">
      <div className="relative mb-6">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-md"
        />
      </div>
      <h3 className="text-xl font-bold text-[#3C3C3C] mb-2">{member.name}</h3>
      <p className="text-[#00AEEF] font-medium mb-3">{member.role}</p>
      <p className="text-[#9AA0A6]">{member.bio}</p>
    </div>
  );
};

export default TeamMemberCard;