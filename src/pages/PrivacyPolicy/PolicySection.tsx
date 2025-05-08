import React, { ReactNode, useState } from "react";

interface PolicySectionProps {
 title: string;
 icon: ReactNode;
 content: ReactNode;
}

const PolicySection: React.FC<PolicySectionProps> = ({
 title,
 icon,
 content,
}) => {
 const [isHovered, setIsHovered] = useState(false);

 return (
  <div
   className={`bg-slate-900/50 border border-slate-800 rounded-lg overflow-hidden transition-all duration-300 ${
    isHovered ? "shadow-md shadow-emerald-500/10" : ""
   }`}
   onMouseEnter={() => setIsHovered(true)}
   onMouseLeave={() => setIsHovered(false)}
  >
   <div className="p-6">
    <div className="flex items-center mb-4">
     <div
      className={`transition-transform duration-300 ${
       isHovered ? "scale-110" : ""
      }`}
     >
      {icon}
     </div>
     <h2 className="text-xl font-semibold text-white ml-3">{title}</h2>
    </div>
    <div className="text-slate-300 leading-relaxed">{content}</div>
   </div>
  </div>
 );
};

export default PolicySection;
