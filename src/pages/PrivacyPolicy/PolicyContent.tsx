import React from "react";
import PolicySection from "./PolicySection";
import {
 Database,
 FileText,
 UserCheck,
 Lock,
 MailQuestion,
} from "lucide-react";

const PolicyContent: React.FC = () => {
 return (
  <div className="pt-32 pb-16 bg-[#0A0B14] px-4 py-12">
   <div className="max-w-4xl mx-auto">
    <div className="text-center mb-16 animate-fade-in">
     <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
      Privacy Policy
     </h1>
     <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
      We are committed to protecting your privacy and ensuring the security of
      your personal information.
     </p>
    </div>

    <div className="space-y-8">
     <PolicySection
      title="Information We Collect"
      icon={<Database className="w-6 h-6 text-emerald-400" />}
      content={
       <ul className="list-disc pl-6 space-y-2">
        <li>Personal contact details (name, email, phone number)</li>
        <li>Business or professional information</li>
        <li>Payment and billing details</li>
        <li>Purchase history and transaction records</li>
       </ul>
      }
     />

     <PolicySection
      title="How We Use Your Information"
      icon={<FileText className="w-6 h-6 text-emerald-400" />}
      content={
       <ul className="list-disc pl-6 space-y-2">
        <li>Facilitate payments and billing processes</li>
        <li>Offer customer support and respond to inquiries</li>
        <li>Ensure compliance with legal requirements and regulations</li>
        <li>Enhance and personalize our services and user experience</li>
       </ul>
      }
     />

     <PolicySection
      title="Protecting Your Data"
      icon={<Lock className="w-6 h-6 text-emerald-400" />}
      content={
       <ul className="list-disc pl-6 space-y-2">
        <li>Secure encryption for sensitive data transmission</li>
        <li>Routine security assessments and vulnerability scans</li>
        <li>Strict access controls for staff and systems</li>
        <li>Continuous monitoring of our networks for unauthorized activity</li>
       </ul>
      }
     />

     <PolicySection
      title="Your Privacy Rights"
      icon={<UserCheck className="w-6 h-6 text-emerald-400" />}
      content={
       <ul className="list-disc pl-6 space-y-2">
        <li>View the data we hold about you</li>
        <li>Correct or update any inaccurate or incomplete information</li>
        <li>Request the deletion of your personal data</li>
        <li>Object to or restrict certain data processing activities</li>
       </ul>
      }
     />

     <PolicySection
      title="How to Reach Us"
      icon={<MailQuestion className="w-6 h-6 text-emerald-400" />}
      content={
       <div>
        <p className="mb-4">
         If you have questions or concerns regarding your privacy, please
         contact us at:
        </p>
        <p>
         Email: <span className="text-emerald-400">privacy@cclearing.com</span>
        </p>
       </div>
      }
     />
    </div>
   </div>
  </div>
 );
};

export default PolicyContent;
