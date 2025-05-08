import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Book from "./pages/Book";
import PolicyContent from "./pages/PrivacyPolicy/PolicyContent";
import TermsContent from "./pages/TermsConditions/TermsContent";
import AmlKycContent from "./pages/AmlKyc/AmlKycContent";

function App() {
 return (
  <div className="min-h-screen bg-[#0A0F1C] text-white">
   <Header />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/book" element={<Book />} />
    <Route path="/privacy" element={<PolicyContent />} />
    <Route path="/terms" element={<TermsContent />} />
    <Route path="/aml" element={<AmlKycContent />} />
   </Routes>
   <Footer />
  </div>
 );
}

export default App;
