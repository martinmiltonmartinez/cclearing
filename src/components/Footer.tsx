import { Shield } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
 const footerLinks = [
  {
   title: "Product",
   links: [
    {
     name: "Solutions",
     value: "solutions",
    },
    { name: "Features", value: "features" },
    { name: "Security", value: "security" },
    { name: "Support", value: "support" },
   ],
  },
  {
   title: "Company",
   links: [
    {
     name: "Terms & Conditions",
     value: "terms",
    },
    { name: "Privacy Policy", value: "privacy" },
    { name: "AML/KYC", value: "aml" },
   ],
  },
  {
   title: "Contact",
   links: [
    { name: "Email", value: "operations@cclearing.com" },
    { name: "Address", value: "UNIT 805 LEVEL 8 220 COLLINS STREET, MELBOURNE, VIC, 3000, AUSTRALIA" },
    { name: "Availability", value: "24/7 Support Available" },
   ],
  },
 ];
 return (
  <>
   <footer className="bg-black/50 py-16 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4">
     <div className="grid md:grid-cols-4 gap-12">
      <div>
       <div className="flex items-center gap-3 mb-6">
        <Shield className="h-8 w-8 text-[#00F5A0]" />
        <span className="text-2xl font-bold">CClearing</span>
       </div>
       <p className="text-gray-400">
        Next-generation payment infrastructure for the digital gaming industry.
       </p>
      </div>
      {footerLinks.map((section, index) => (
       <div key={index}>
        <h3 className="font-bold mb-6">{section.title}</h3>
        <ul className="space-y-4">
         {section.links.map((link, linkIndex) => (
          <li key={linkIndex}>
           {section.title !== "Contact" ? (
            <HashLink
             smooth
             to={`${
              section.title === "Company"
               ? `/${link.value}/#`
               : `/#${link.value}`
             }`}
             className="text-gray-400 hover:text-[#00F5A0] transition-colors"
            >
             {link.name}
            </HashLink>
           ) : (
            <span className="text-gray-400">{link.value}</span>
           )}
          </li>
         ))}
        </ul>
       </div>
      ))}
     </div>
     <div className="border-t border-white/5 mt-16 pt-8 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} CClearing. All rights reserved.</p>
     </div>
    </div>
   </footer>
  </>
 );
};

export default Footer;
