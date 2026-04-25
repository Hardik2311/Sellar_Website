import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import footerLogo from '../../assets/Sellar_Logo_white.png';
import { Link } from "react-router-dom";

const Footer = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-[#00171f] pt-16 md:pt-20 pb-8 px-6 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Main Grid Layout */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 pb-12 border-b border-white/5">

                    {/* Brand Column */}
                    <div className="flex-1 max-w-sm">
                        <img
                            src={footerLogo}
                            alt="Sellar Logo"
                            className="h-6 w-auto mb-6"
                        />
                        <p className="text-slate-400 leading-relaxed text-base mb-8">
                            The modern operating system for retail businesses. Empowering shops with digital tools to grow faster.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {[
                                { icon: <Facebook size={20} fill="#1877F2" stroke="none" />, url: "https://facebook.com" },
                                { icon: <Twitter size={20} fill="#1DA1F2" stroke="none" />, url: "https://twitter.com" },
                                { icon: <Instagram size={20} className="text-pink-500" />, url: "https://www.instagram.com/sellar.in?igsh=MXhobzJrMzIzbGdlaQ==" },
                                { icon: <Linkedin size={20} fill="#0A66C2" stroke="none" />, url: "https://www.linkedin.com/company/sellar-in/" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:-translate-y-1 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="flex-[2] w-full grid grid-cols-2 sm:grid-cols-3 gap-10">
                        {/* Product Column */}
                        <div className="flex flex-col">
                            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-[#007EA7]">
                                Product
                            </h4>
                            <ul className="space-y-4 text-slate-400 text-sm font-medium">
                                <li onClick={() => scrollToSection('posi')} className="cursor-pointer hover:text-white hover:pl-1 transition-all">POSI  - billing</li>
                                <li onClick={() => scrollToSection('catalog')} className="cursor-pointer hover:text-white hover:pl-1 transition-all">Catalog - digital store</li>
                                <li onClick={() => scrollToSection('why-sellar')} className="cursor-pointer hover:text-white hover:pl-1 transition-all">Features</li>
                                <li onClick={() => scrollToSection('pricing')} className="cursor-pointer hover:text-white hover:pl-1 transition-all">Pricing</li>
                            </ul>
                        </div>

                        {/* Support Column */}
                        <div className="flex flex-col">
                            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-[#007EA7]">
                                Support
                            </h4>
                            <ul className="space-y-4 text-slate-400 text-sm font-medium">
                                {/* Click added to scroll to your contact section */}
                                <li
                                    onClick={() => scrollToSection('contact')}
                                    className="cursor-pointer hover:text-white hover:pl-1 transition-all"
                                >
                                    Contact Us
                                </li>
                                <li
                                    onClick={() => scrollToSection('solutions')}
                                    className="cursor-pointer hover:text-white hover:pl-1 transition-all"
                                >
                                    Core Solutions
                                </li>
                                <li>
                                    <Link
                                        to="/terms"
                                        className="hover:text-white cursor-pointer transition-colors">
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/privacy"
                                        className="hover:text-white cursor-pointer transition-colors"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Made in India Section */}
                <div className="text-center text-slate-300 font-medium tracking-wide">
                    Made with <Heart size={16} className="inline-block mx-1 text-red-500 animate-pulse fill-red-500" /> in India
                </div>

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6 text-sm text-slate-500 font-medium">
                    <p>© 2025 Sellar Inc. Built for Indian Retailers and WholeSalers.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;