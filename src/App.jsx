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
      <FeaturesSection/>
      <WebAppSection/>
      <ReportsSection/>
      <BillFormatsSection/>
      <WhoCanUseSection/>
      <ProductsSection/>
      <div id="pricing"><PricingTable /></div>
      <Testimonials />
      <FAQ/>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
};

export default App;