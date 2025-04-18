import { useState } from "react";
import { Shield, X, Menu } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Header = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 return (
  <>
   <header className="fixed w-full bg-[#0A0F1C]/80 backdrop-blur-xl z-50 border-b border-white/5">
    <div className="max-w-7xl mx-auto px-4">
     <div className="flex justify-between items-center h-20">
      <div className="flex items-center gap-3">
       <HashLink smooth to="/#">
        <div className="relative">
         <Shield className="h-8 w-8 text-[#00F5A0]" />
         <Shield className="h-8 w-8 absolute top-0 left-0 text-[#00F5A0] blur-sm opacity-50" />
        </div>
        <span className="text-2xl font-bold tracking-tight">CClearing</span>
       </HashLink>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-12">
       <div className="flex gap-8">
        <HashLink
         smooth
         to="/#solutions"
         className="text-sm font-medium text-gray-300 hover:text-[#00F5A0] transition-colors"
        >
         Solutions
        </HashLink>
        <HashLink
         smooth
         to="/#features"
         className="text-sm font-medium text-gray-300 hover:text-[#00F5A0] transition-colors"
        >
         Features
        </HashLink>
        <HashLink
         smooth
         to="/#security"
         className="text-sm font-medium text-gray-300 hover:text-[#00F5A0] transition-colors"
        >
         Security
        </HashLink>
        <HashLink
         smooth
         to="/#contact"
         className="text-sm font-medium text-gray-300 hover:text-[#00F5A0] transition-colors"
        >
         Contact
        </HashLink>
       </div>
       <HashLink
        smooth
        to="/book/#"
        className="bg-[#00F5A0] text-black px-6 py-2.5 rounded-lg font-medium hover:bg-[#00F5A0]/90 transition-all"
       >
        Start Integration
       </HashLink>
      </nav>

      {/* Mobile Menu Button */}
      <button
       className="lg:hidden p-2"
       onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
       {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
     </div>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
     <div className="lg:hidden bg-[#0A0F1C] border-t border-white/5">
      <div className="px-4 py-6 space-y-4">
       <HashLink
        smooth
        to="#solutions"
        className="block text-gray-300 hover:text-[#00F5A0] transition-colors"
       >
        Solutions
       </HashLink>
       <HashLink
        smooth
        to="#features"
        className="block text-gray-300 hover:text-[#00F5A0] transition-colors"
       >
        Features
       </HashLink>
       <HashLink
        smooth
        to="#security"
        className="block text-gray-300 hover:text-[#00F5A0] transition-colors"
       >
        Security
       </HashLink>
       <button className="w-full bg-[#00F5A0] text-black px-6 py-2.5 rounded-lg font-medium hover:bg-[#00F5A0]/90 transition-all">
        Start Integration
       </button>
      </div>
     </div>
    )}
   </header>
  </>
 );
};

export default Header;
