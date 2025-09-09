import React from "react";
import AmlKycSection from "./AmlKycSection";
import {
 Lock,
 Users,
 Eye,
 FileText,
 Bell,
 ShieldCheck,
 UserCheck,
 Globe,
} from "lucide-react";

const AmlKycContent: React.FC = () => {
 return (
  <div className="pt-32 pb-16 bg-[#0A0B14] px-4 py-12">
   <div className="max-w-4xl mx-auto">
    <div className="text-center mb-16 animate-fade-in">
     <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
      AML and KYC Framework
     </h1>
     <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
      This framework establishes the protocols that CClearing adopts to identify,
      assess, and mitigate risks associated with money laundering, terrorist
      financing, and other illicit financial crimes.
     </p>
    </div>

    <div className="space-y-8">
     <AmlKycSection
      title="Objectives"
      icon={<Eye className="w-6 h-6 text-emerald-400" />}
      content={
       <ul className="list-disc pl-6 space-y-2">
        <li>
         Guarantee adherence to all AML/KYC legal and regulatory requirements
        </li>
        <li>Detect and report suspicious or unusual activities promptly</li>
        <li>
         Confirm the identity and legitimacy of customers and beneficial owners
        </li>
        <li>
         Maintain comprehensive, accurate records in compliance with legal
         mandates
        </li>
       </ul>
      }
     />

     <AmlKycSection
      title="Applicability"
      icon={<Users className="w-6 h-6 text-emerald-400" />}
      content={
       <p>
        This document applies to every individual and entity using CClearing's
        services, including all staff, third-party agents, contractors, and
        affiliates involved in customer onboarding, transaction oversight, and
        compliance functions.
       </p>
      }
     />

     <AmlKycSection
      title="Customer Verification Procedures (CVD)"
      icon={<UserCheck className="w-6 h-6 text-emerald-400" />}
      content={
       <>
        <p className="mb-4">
         Before initiating a business relationship or transaction, the
         Organization conducts thorough verification of customer identities.
         This process encompasses:
        </p>

        <h3 className="font-medium text-white text-lg mb-2">
         For Individual Clients:
        </h3>
        <ul className="list-disc pl-6 space-y-1 mb-4">
         <li>Complete legal name</li>
         <li>Date of birth</li>
         <li>Nationality</li>
         <li>
          Valid government-issued ID (passport, driver's license, or national ID
          card)
         </li>
         <li>
          Proof of residence (utility bill, bank statement, or government
          correspondence)
         </li>
        </ul>

        <h3 className="font-medium text-white text-lg mb-2">
         For Corporate Clients:
        </h3>
        <ul className="list-disc pl-6 space-y-1">
         <li>Certificate of registration/incorporation</li>
         <li>Articles of association or bylaws</li>
         <li>Evidence of operational address</li>
         <li>Details of directors and key shareholders</li>
         <li>Identification of ultimate beneficial owners (UBOs)</li>
        </ul>
       </>
      }
     />

     <AmlKycSection
      title="Special Due Diligence Measures (SDDM)"
      icon={<ShieldCheck className="w-6 h-6 text-emerald-400" />}
      content={
       <ul className="list-disc pl-6 space-y-2">
        <li>
         Clients classified as high-risk (e.g., PEPs, FATF-defined high-risk
         jurisdictions)
        </li>
        <li>
         Transactions involving large amounts or unusual activity patterns
        </li>
        <li>Customers from regions with heightened AML concerns</li>
        <li>Politically Exposed Persons (PEPs) and their associates</li>
       </ul>
      }
     />

     <AmlKycSection
      title="Continuous Oversight"
      icon={<Eye className="w-6 h-6 text-emerald-400" />}
      content={
       <ul className="list-disc pl-6 space-y-2">
        <li>Monitoring transaction activity for irregularities or anomalies</li>
        <li>Regular updates and verification of customer information</li>
        <li>Flagging and investigating suspicious transaction behaviors</li>
       </ul>
      }
     />

     <AmlKycSection
      title="Documentation and Record Management"
      icon={<FileText className="w-6 h-6 text-emerald-400" />}
      content={
       <p>
        All collected KYC data, transaction logs, and AML audit records are
        securely stored for no less than five years or as mandated by law,
        ensuring traceability and compliance.
       </p>
      }
     />

     <AmlKycSection
      title="Suspicious Transaction Reporting (STR)"
      icon={<Bell className="w-6 h-6 text-emerald-400" />}
      content={
       <p>
        Procedures are in place for employees to identify and escalate
        suspicious activities to the designated AML Compliance Officer. Reports
        are submitted to the relevant authorities or FIUs in accordance with
        local regulations.
       </p>
      }
     />

     <AmlKycSection
      title="Staff Training & Development"
      icon={<Users className="w-6 h-6 text-emerald-400" />}
      content={
       <p>
        All personnel involved in AML/KYC functions undergo mandatory training
        sessions annually, focusing on compliance requirements, red flag
        indicators, and reporting procedures. Continuous education ensures
        awareness of evolving risks and regulations.
       </p>
      }
     />

     <AmlKycSection
      title="Screening for Sanctions & PEPs"
      icon={<Globe className="w-6 h-6 text-emerald-400" />}
      content={
       <p>
        All customers are systematically checked against international sanctions
        lists (such as OFAC, UN sanctions, EU lists) and PEP registers to
        prevent dealings with sanctioned or high-risk individuals.
       </p>
      }
     />

     <AmlKycSection
      title="Data Privacy & Security"
      icon={<Lock className="w-6 h-6 text-emerald-400" />}
      content={
       <p>
        All personal and sensitive information collected during KYC procedures
        is managed in compliance with data protection laws like GDPR and other
        relevant privacy statutes, ensuring confidentiality and secure handling.
       </p>
      }
     />

     <AmlKycSection
      title="Compliance Governance and Oversight"
      icon={<ShieldCheck className="w-6 h-6 text-emerald-400" />}
      content={
       <>
        <p className="mb-4">
         A dedicated Compliance Officer manages the AML/KYC program, overseeing:
        </p>
        <ul className="list-disc pl-6 space-y-2">
         <li>Regulatory compliance and internal controls</li>
         <li>Periodic reviews of policies and procedures</li>
         <li>
          Acting as the primary liaison with enforcement agencies and regulators
         </li>
        </ul>
       </>
      }
     />

     <AmlKycSection
      title="Policy Review & Revision"
      icon={<FileText className="w-6 h-6 text-emerald-400" />}
      content={
       <p>
        This policy is subject to annual review or upon significant regulatory
        or operational changes to ensure continued effectiveness and compliance.
       </p>
      }
     />
    </div>
   </div>
  </div>
 );
};

export default AmlKycContent;
