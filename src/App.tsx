import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Book from "./pages/Book";

function App() {
 return (
  <div className="min-h-screen bg-[#0A0F1C] text-white">
   <Header />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/book" element={<Book />} />
   </Routes>
   <Footer />
  </div>
 );
}

export default App;
