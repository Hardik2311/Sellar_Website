import './App.css';
import Navbar from './Component/Navbar/Navbar.jsx';
import HeroSection from './Component/HeroSection/HeroSection.jsx';
import WhySellar from './Component/WhySellar/WhySellar.jsx';
import CoreSolution from './Component/CoreSolutions/CoreSolution.jsx';
import PricingTable from './Component/PricingTable/PricingTable';
import FutureVision from './Component/FutureVision/FutureVision.jsx';
import AppShowcase from './Component/AppShowCase/AppShowCase.jsx';
import CatalogueShowCase from './Component/CatalogueShowCase/CatalogueShowCase.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Footer from './Component/Footer/Footer.jsx';
import Testimonials from './Component/Testimonials/Testimonials';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CalciShowCase from './Component/CalciShowCase/CalciShowCase';

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
      <AppShowcase />
      <CalciShowCase/>
      <CatalogueShowCase />
      <div id="solutions"><CoreSolution /></div>
      <div id="why-sellar"><WhySellar /></div>
      <div id="pricing"><PricingTable /></div>
      <FutureVision />
      <Testimonials />
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
};

export default App;