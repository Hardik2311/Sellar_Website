import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import footerLogo from "../../assets/sellar-logo-heading.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);

      if (element) {
        const yOffset = -120;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  const isPrivacyPage = location.pathname === "/privacy";
  const isTermsPage = location.pathname === "/terms";

  const navLinks = [
    { name: "Features", id: "features" },
    { name: "Why Sellar", id: "webApp" },
    { name: "Pricing", id: "pricing" },
    { name: "Connect", id: "contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center md:pt-2 pointer-events-none">
      <nav
        className={`pointer-events-auto flex flex-col md:flex-row items-center justify-between transition-all duration-500 ease-in-out ${isScrolled || isPrivacyPage || isTermsPage
            ? "bg-white/30 backdrop-blur-md shadow-lg border-gray-200 py-3 px-6 mt-2 text-black"
            : "bg-white border border-sky-100 shadow-sm py-3 px-4 md:px-8 text-black"
          } rounded-md ${isScrolled ? "w-[95%] md:w-[900px]" : "w-full max-w-7xl"
          }`}
      >

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer select-none mb-3 md:mb-0 group" onClick={() => handleNavClick("home")}>
          <img src={footerLogo} alt="Sellar Logo" className="h-8 md:h-8 w-auto transition-transform duration-300 group-hover:scale-105" />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center md:gap-1 w-full md:w-auto justify-center md:justify-end overflow-x-auto no-scrollbar">
          {navLinks.map((link) => (
            <button key={link.name} onClick={() => handleNavClick(link.id)} className="relative px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-black rounded-sm whitespace-nowrap transition-all duration-300 hover:text-gray-500 active:scale-95 group">
              {link.name}
              <span className="absolute bottom-0 left-1/2 h-[1.5px] w-0 -translate-x-1/2 rounded-full bg-black transition-all duration-300 group-hover:w-4" />
            </button>
          ))}

          {/* Get Started */}
          <div className="hidden md:block ml-2">
            <a href="https://app.sellar.in/signup" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0">
              Get Started
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;