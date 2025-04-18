import {
 ChevronRight,
 Zap,
 Wallet,
 Globe,
 BarChart3,
 Lock,
} from "lucide-react";
import { HashLink } from "react-router-hash-link";

const stats = [
 { value: "$10B+", label: "Monthly Volume" },
 { value: "99.99%", label: "Uptime SLA" },
 { value: "150ms", label: "Avg. Response Time" },
 { value: "200+", label: "Global Partners" },
];

const solutions = [
 {
  icon: <Wallet className="h-12 w-12 text-[#00F5A0]" />,
  title: "Smart Payment Routing",
  description:
   "AI-powered routing optimizes transaction success rates across multiple payment providers.",
  image:
   "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2674",
 },
 {
  icon: <Globe className="h-12 w-12 text-[#00F5A0]" />,
  title: "Global Processing",
  description:
   "Process payments in 180+ countries with local acquiring and dynamic currency conversion.",
  image:
   "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670",
 },
 {
  icon: <Zap className="h-12 w-12 text-[#00F5A0]" />,
  title: "Real-Time Settlement",
  description:
   "Instant settlement options with our proprietary liquidity network.",
  image:
   "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670",
 },
];

const features = [
 {
  icon: <BarChart3 className="h-12 w-12 text-[#00F5A0]" />,
  title: "Advanced Analytics",
  description:
   "Real-time insights into transaction patterns, user behavior, and risk metrics.",
 },
 {
  icon: <Lock className="h-12 w-12 text-[#00F5A0]" />,
  title: "Fraud Prevention",
  description:
   "ML-powered fraud detection with customizable rule engines and risk scoring.",
 },
 {
  icon: <Globe className="h-12 w-12 text-[#00F5A0]" />,
  title: "Global Compliance",
  description:
   "Built-in compliance with gaming regulations across major jurisdictions.",
 },
];

const securityFeatures = [
 {
  title: "PCI DSS Level 1",
  description:
   "Highest level of payment security certification with regular third-party audits.",
  image:
   "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670",
 },
 {
  title: "Multi-Layer Encryption",
  description: "End-to-end encryption with HSM-based key management.",
  image:
   "https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=2670",
 },
 {
  title: "AML Compliance",
  description:
   "Automated transaction monitoring and reporting for AML compliance.",
  image:
   "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670",
 },
 {
  title: "Fraud Protection",
  description:
   "AI-driven fraud detection with real-time prevention capabilities.",
  image:
   "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2670",
 },
];

const Home = () => {
 return (
  <>
   <section className="relative pt-32 pb-24 overflow-hidden mesh-gradient">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C] via-transparent to-[#0A0F1C]"></div>
    <div className="max-w-7xl mx-auto px-4 relative">
     <div className="max-w-4xl">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
       Next-Gen Payment Infrastructure for
       <span className="gradient-text block mt-2">Digital Gaming</span>
      </h1>
      <p className="text-xl text-gray-400 mb-12 max-w-2xl">
       Powering seamless transactions for the world's most ambitious gaming
       platforms with our AI-driven payment infrastructure.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
       <HashLink
        to="/book/#"
        className="bg-[#00F5A0] text-black px-8 py-4 rounded-lg font-medium hover:bg-[#00F5A0]/90 transition-all inline-flex items-center gap-2"
       >
        Book Now
        <ChevronRight className="h-5 w-5" />
       </HashLink>
       <HashLink
        smooth
        to="/#solutions"
        className="border border-[#00F5A0]/30 bg-[#00F5A0]/5 backdrop-blur-xl text-[#00F5A0] px-8 py-4 rounded-lg font-medium hover:bg-[#00F5A0]/10 transition-all"
       >
        Explore Our Platform
       </HashLink>
      </div>
     </div>

     {/* Stats */}
     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-white/5 pt-12">
      {stats.map((stat, index) => (
       <div key={index}>
        <p className="text-4xl font-bold gradient-text mb-2">{stat.value}</p>
        <p className="text-gray-400">{stat.label}</p>
       </div>
      ))}
     </div>
    </div>
   </section>

   <section id="solutions" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2670')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
    <div className="max-w-7xl mx-auto px-4 relative">
     <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-6">
       Enterprise-Grade Payment Solutions
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
       Built for scale, designed for reliability, and optimized for the unique
       needs of digital gaming platforms.
      </p>
     </div>
     <div className="grid md:grid-cols-3 gap-8">
      {solutions.map((solution, index) => (
       <div
        key={index}
        className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 card-glow border border-white/10 relative overflow-hidden"
       >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className="absolute inset-0">
         <img
          src={solution.image}
          alt={solution.title}
          className="w-full h-full object-cover opacity-10 mix-blend-overlay"
         />
        </div>
        <div className="relative">
         <div className="relative inline-block">
          {solution.icon}
          <div className="absolute inset-0 blur-xl opacity-50">
           {solution.icon}
          </div>
         </div>
         <h3 className="text-xl font-bold mt-6 mb-4">{solution.title}</h3>
         <p className="text-gray-400">{solution.description}</p>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>

   <section
    id="features"
    className="py-24 bg-black/50 relative overflow-hidden"
   >
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=2670')] bg-cover bg-fixed opacity-5 mix-blend-overlay"></div>
    <div className="max-w-7xl mx-auto px-4 relative">
     <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
       <h2 className="text-4xl font-bold mb-8">
        Built for the Future of Digital Payments
       </h2>
       <div className="space-y-8">
        {features.map((feature, index) => (
         <div key={index} className="flex gap-6">
          <div className="relative flex-shrink-0">
           {feature.icon}
           <div className="absolute inset-0 blur-xl opacity-50">
            {feature.icon}
           </div>
          </div>
          <div>
           <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
           <p className="text-gray-400">{feature.description}</p>
          </div>
         </div>
        ))}
       </div>
      </div>
      <div className="relative">
       <div
        className="rounded-3xl bg-gradient-to-br from-[#00F5A0]/20 to-transparent border border-white/10"
        style={{ aspectRatio: 3 / 2 }}
       ></div>
       <img
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670"
        alt="Platform Interface"
        className="absolute inset-0 object-cover rounded-3xl mix-blend-luminosity opacity-50"
       />
      </div>
     </div>
    </div>
   </section>
   <section id="security" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563986768494-4dee385ff3a5?q=80&w=2670')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
    <div className="max-w-7xl mx-auto px-4 relative">
     <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-6">
       Bank-Grade Security & Compliance
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
       Enterprise-level security with real-time fraud prevention and
       comprehensive regulatory compliance.
      </p>
     </div>
     <div className="grid md:grid-cols-2 gap-8">
      {securityFeatures.map((feature, index) => (
       <div
        key={index}
        className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 relative overflow-hidden"
       >
        <div className="absolute inset-0">
         <img
          src={feature.image}
          alt={feature.title}
          className="w-full h-full object-cover opacity-5 mix-blend-overlay"
         />
        </div>
        <div className="relative">
         <Lock className="h-6 w-6 text-[#00F5A0] mb-6" />
         <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
         <p className="text-gray-400">{feature.description}</p>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>
   <section
    id="contact"
    className="py-24 mesh-gradient relative overflow-hidden"
   >
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670')] bg-cover bg-fixed opacity-5 mix-blend-overlay"></div>
    <div className="max-w-7xl mx-auto px-4 text-center relative">
     <h2 className="text-4xl font-bold mb-6">
      Ready to Transform Your Payment Infrastructure?
     </h2>
     <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
      Join the leading gaming platforms already using CClearing to process
      millions in transactions daily.
     </p>
     <div className="flex flex-col sm:flex-row justify-center gap-4">
      <HashLink
       to="/book/#"
       className="bg-[#00F5A0] text-black px-8 py-4 rounded-lg font-medium hover:bg-[#00F5A0]/90 transition-all inline-flex items-center justify-center gap-2"
      >
       Schedule a Demo
       <ChevronRight className="h-5 w-5" />
      </HashLink>
      {/* <button className="border border-[#00F5A0]/30 bg-[#00F5A0]/5 backdrop-blur-xl text-[#00F5A0] px-8 py-4 rounded-lg font-medium hover:bg-[#00F5A0]/10 transition-all">
       Contact Sales
      </button> */}
     </div>
    </div>
   </section>
  </>
 );
};

export default Home;
