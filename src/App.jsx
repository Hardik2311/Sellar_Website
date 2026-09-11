import './App.css';
import Navbar from './Component/Navbar/Navbar.jsx';
import HeroSection from './Component/HeroSection/HeroSection.jsx';
import PricingTable from './Component/PricingTable/PricingTable';
import Contact from './Component/Contact/Contact.jsx';
import Footer from './Component/Footer/Footer.jsx';
import Testimonials from './Component/Testimonials/Testimonials';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FeaturesSection from './Component/Features/Features';
import ReportsSection from './Component/Reports/Reports';
import BillFormatsSection from './Component/BillSection/BillSection';
import WhoCanUseSection from './Component/WhoCanUseSellar/WhoCanUseSellar';
import WebAppSection from './Component/WebAppSection/WebAppSection';
import ProductsSection from './Component/OurProducts/OurProducts';
import FAQ from './Component/FAQ/FAQ';
import { FaWhatsapp } from "react-icons/fa6";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const element = document.getElementById(id);

      if (element) {
        const yOffset = -120;
        const y =
          element.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        setTimeout(() => {
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="app-wrapper">
      <Navbar />
      <div id="home"><HeroSection /></div>
      <FeaturesSection />
      <WebAppSection />
      <ReportsSection />
      <BillFormatsSection />
      <WhoCanUseSection />
      <ProductsSection />
      <div id="pricing"><PricingTable /></div>
      <Testimonials />
      <FAQ />
      <div id="contact"><Contact /></div>
      <Footer />


      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/9818815838?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-10 md:bottom-14 md:right-7 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl sm:bottom-6 sm:right-6"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>

  );
};

export default App;