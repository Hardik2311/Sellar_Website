import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import footerLogo from "../../assets/sellar-logo-heading.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -120;
        const y =
          element.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  const navigate = useNavigate();
  const location = useLocation();

  const isPrivacyPage = location.pathname === "/privacy";
  const isTermsPage = location.pathname === "/terms";

  const navLinks = [
    { name: "Solutions", id: "solutions" },
    { name: "Why Sellar", id: "why-sellar" },
    { name: "Pricing", id: "pricing" },
    // {name:"Our Customers",id:"testimonial"},
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-2 px-2 md:pt-4 md:px-4 pointer-events-none">
      <nav
        className={`
          pointer-events-auto
          flex flex-col md:flex-row items-center justify-between
          transition-all duration-500 ease-in-out
          ${(isScrolled || isPrivacyPage || isTermsPage)
            ? "bg-white/30 backdrop-blur-md shadow-lg border-gray-200 py-3 md:py-3 px-6 mt-2 text-black"
            : "bg-transparent border-transparent py-4 px-4 md:px-8 text-white"
          }
          /* Shape logic: Rounded corners always on mobile, Pill shape on desktop when scrolled */
          rounded-sm md:rounded-sm
          ${isScrolled ? "w-[95%] md:w-[900px]" : "w-full max-w-7xl"}
        `}
      >
        {/* --- Logo Section --- */}
        <div
          className="flex items-center gap-2 cursor-pointer select-none mb-3 md:mb-0"
          onClick={() => handleNavClick('home')}
        >
          {/* We use a CSS filter to invert the logo color if needed, 
              or you can swap images. Assuming your logo is dark: 
              We use 'brightness-0 invert' to make it white when not scrolled. 
          */}
          <img
            src={footerLogo}
            alt="Sellar Logo"
            className={`transition-all duration-300 h-8 md:h-8 ${!isScrolled ? "" : ""
              }`}
          />
        </div>

        {/* --- Links Section (Always Visible) --- */}
        <div className="flex items-center md:gap-1 w-full md:w-auto justify-center md:justify-end overflow-x-auto no-scrollbar">

          {/* Navigation Links */}
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              className={`
                px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium rounded-sm transition-colors whitespace-nowrap
                ${(isScrolled || isPrivacyPage || isTermsPage)
                  ? "text-black hover:bg-gray-100"
                  : "text-white/80 hover:text-white hover:bg-white/10"
                }
              `}
            >
              {link.name}
            </button>
          ))}

          {/* CTA Button (Hidden on very small screens if crowded, or kept as icon) */}
          <div className="hidden md:block ml-2">
            <a
              href="https://app.sellar.in/signup"
              className={`
                font-semibold text-sm transition-all duration-300 rounded-sm
                ${isScrolled
                  ? "bg-black text-white px-5 py-2 hover:bg-gray-800"
                  : "bg-white text-black px-6 py-2.5 shadow-sm hover:bg-gray-100"
                }
              `}
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;