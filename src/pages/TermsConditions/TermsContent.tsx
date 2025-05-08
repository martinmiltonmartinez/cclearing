import React from "react";
import TermsSection from "./TermsSection";
import {
 FileText,
 Shield,
 CreditCard,
 DollarSign,
 AlertTriangle,
 MailQuestion,
} from "lucide-react";

const TermsContent: React.FC = () => {
 return (
  <div className="pt-32 pb-16 bg-[#0A0B14] px-4 py-12">
   <div className="max-w-4xl mx-auto">
    <div className="text-center mb-16 animate-fade-in">
     <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
      Terms & Conditions
     </h1>
     <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
      By accessing or using our payment solutions, you agree to adhere to these
      terms and conditions.
     </p>
    </div>

    <div className="space-y-8">
     <TermsSection
      title="Agreement to Terms"
      icon={<FileText className="w-6 h-6 text-emerald-400" />}
      content={
       <p>
        By accessing or using our payment solutions, you agree to adhere to
        these terms and conditions.
       </p>
      }
     />

     <TermsSection
      title="Eligibility and Account Setup"
      icon={<Shield className="w-6 h-6 text-emerald-400" />}
      content={
       <ul className="list-disc pl-6 space-y-2">
        <li>Be a legally recognized business entity</li>
        <li>Abide by all relevant legal and regulatory standards</li>
        <li>Provide truthful and current account information</li>
        <li>Protect your login credentials and account access</li>
       </ul>
      }
     />

     <TermsSection
      title="Payment Services Offered"
      icon={<CreditCard className="w-6 h-6 text-emerald-400" />}
      content={
       <ul className="list-disc pl-6 space-y-2">
        <li>Credit and debit card transactions</li>
        <li>Direct bank account transfers</li>
        <li>Alternative payment options (e-wallets, digital wallets, etc.)</li>
       </ul>
      }
     />

     <TermsSection
      title="Pricing and Service Charges"
      icon={<DollarSign className="w-6 h-6 text-emerald-400" />}
      content={
       <ul className="list-disc pl-6 space-y-2">
        <li>The total volume of transactions processed</li>
        <li>The method of payment used</li>
        <li>The level of transaction risk involved</li>
        <li>Additional value-added services selected</li>
       </ul>
      }
     />

     <TermsSection
      title="Rights to Terminate"
      icon={<AlertTriangle className="w-6 h-6 text-emerald-400" />}
      content={
       <ul className="list-disc pl-6 space-y-2">
        <li>Breach of these terms or misuse</li>
        <li>Suspicion of fraudulent or unauthorized activity</li>
        <li>Failure to pay applicable fees</li>
        <li>Compliance with legal or regulatory orders</li>
       </ul>
      }
     />

     <TermsSection
      title="Support and Inquiries"
      icon={<MailQuestion className="w-6 h-6 text-emerald-400" />}
      content={
       <div>
        <p className="mb-4">
         For questions or concerns regarding these terms, please contact us at:
        </p>
        <p>
         Email: <span className="text-emerald-400">business@cclearing.com</span>
        </p>
       </div>
      }
     />
    </div>
   </div>
  </div>
 );
};

export default TermsContent;
