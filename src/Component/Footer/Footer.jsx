import React from 'react';
import { Heart, ArrowUpRight } from 'lucide-react';
import footerLogo from '../../assets/Sellar_Logo_white.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
} from 'react-icons/fa6';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (id) => {
        if (location.pathname === '/') {
            const element = document.getElementById(id);

            if (element) {
                const yOffset = -120;
                const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;

                window.scrollTo({
                    top: y,
                    behavior: 'smooth',
                });
            }
        } else {
            navigate('/', {
                state: {
                    scrollTo: id,
                },
            });
        }
    };

    const socials = [
        {
            icon: <FaFacebook size={17} />,
            url: 'https://www.facebook.com/profile.php?id=61583546437046',
            color: '#1877F2',
            label: 'Facebook',
        },
        {
            icon: <FaInstagram size={17} />,
            url: 'https://www.instagram.com/sellar.in?igsh=MXhobzJrMzIzbGdlaQ==',
            color: '#E4405F',
            label: 'Instagram',
        },
        {
            icon: <FaLinkedin size={17} />,
            url: 'https://www.linkedin.com/company/sellar-in/',
            color: '#0A66C2',
            label: 'LinkedIn',
        },
        {
            icon: <FaYoutube size={17} />,
            url: 'https://youtube.com/@app.sellar?si=AMORc3NPzr7_Bfq3',
            color: '#FF0000',
            label: 'YouTube',
        },
    ];

    return (
        <footer className="relative overflow-hidden bg-[#00171f] px-5 pb-6  font-sans text-white md:px-8 pt-12">

            {/* =====================================================
                BACKGROUND GLOW
            ====================================================== */}

            <div className="pointer-events-none absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-[#007EA7]/10 blur-3xl" />

            <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-3xl" />

            <div className="pointer-events-none absolute bottom-[-250px] left-[35%] h-[450px] w-[450px] rounded-full bg-sky-500/5 blur-3xl" />


            <div className="relative z-10 mx-auto max-w-7xl">

                {/* =====================================================
                    TOP CTA / BRAND STRIP
                ====================================================== */}

                <div className="mb-14 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035]">

                    <div className="relative flex flex-col gap-6 px-6 py-7 sm:px-8 md:flex-row md:items-center md:justify-between md:px-10">

                        <div>

                            <div className="mb-2 flex items-center gap-2">

                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />

                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                    Built for growing businesses
                                </span>

                            </div>

                            <h3 className="text-xl font-black tracking-tight text-white md:text-2xl">
                                Run your business smarter with Sellar.
                            </h3>

                        </div>


                        <a
                            href="https://app.sellar.in/signup" target="_blank" rel="noopener noreferrer"
                            className="group inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-black text-[#00171f] transition-all duration-300 hover:gap-3 hover:bg-sky-50"
                        >
                            Get Started
                            <ArrowUpRight
                                size={15}
                                className="transition-transform duration-300 group-hover:rotate-45"
                            />
                        </a>

                    </div>

                </div>


                {/* =====================================================
                    MAIN FOOTER
                ====================================================== */}

                <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-20">


                    {/* =================================================
                        BRAND
                    ================================================== */}

                    <div className="max-w-md">

                        <img
                            src={footerLogo}
                            alt="Sellar Logo"
                            className="h-7 w-auto"
                        />


                        <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400 md:text-base">
                            The modern operating system for retail businesses.
                            Empowering shops with digital tools to manage,
                            grow and sell better.
                        </p>


                        {/* Socials */}

                        <div className="mt-7 flex flex-wrap gap-2.5">

                            {socials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.label}
                                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                                    style={{
                                        '--social-color': social.color,
                                    }}
                                >
                                    <span
                                        className="transition-colors duration-300 group-hover:text-[var(--social-color)]"
                                    >
                                        {social.icon}
                                    </span>
                                </a>
                            ))}

                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 sm:gap-10 lg:contents">
                        {/* =================================================
                        PRODUCT LINKS
                    ================================================== */}

                        <div>

                            <h4 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-white">
                                Product
                            </h4>

                            <ul className="space-y-4 text-sm font-medium">

                                <li>
                                    <button
                                        onClick={() => scrollToSection('bill-formats')}
                                        className="group flex items-center gap-1 text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                                    >
                                        Bill Formats
                                    </button>
                                </li>

                                <li>
                                    <button
                                        onClick={() => scrollToSection('who-its-for')}
                                        className="group flex items-center gap-1 text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                                    >
                                        Who Can Use
                                    </button>
                                </li>

                                <li>
                                    <button
                                        onClick={() => scrollToSection('features')}
                                        className="text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                                    >
                                        Features
                                    </button>
                                </li>

                                <li>
                                    <button
                                        onClick={() => scrollToSection('pricing')}
                                        className="text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                                    >
                                        Pricing
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection('reports')}
                                        className="text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                                    >
                                        Reports
                                    </button>
                                </li>

                            </ul>

                        </div>


                        {/* =================================================
                        SUPPORT LINKS
                    ================================================== */}

                        <div>

                            <h4 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-white">
                                Support
                            </h4>

                            <ul className="space-y-4 text-sm font-medium">

                                <li>
                                    <button
                                        onClick={() => scrollToSection('contact')}
                                        className="text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                                    >
                                        Contact Us
                                    </button>
                                </li>

                                <li>
                                    <button
                                        onClick={() => scrollToSection('products')}
                                        className="text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                                    >
                                        Our Products
                                    </button>
                                </li>

                                <li>
                                    <Link
                                        to="/terms"
                                        className="text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                                    >
                                        Terms & Conditions
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/privacy"
                                        className="text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>

                {/* Made in India */}

                <div className="mt-7 mx-auto flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-semibold text-slate-400">

                    Made with

                    <Heart
                        size={14}
                        className="animate-pulse fill-red-500 text-red-500"
                    />

                    in India

                </div>


                {/* =====================================================
                    BOTTOM
                ====================================================== */}

                <div className="flex flex-col gap-4 pt-7 text-center text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:text-left">

                    <p>
                        © 2025 Sellar Inc. Built for Indian Retailers and Wholesalers.
                    </p>

                    <div className="flex items-center justify-center gap-2 md:justify-end">

                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                        <span>
                            Made for modern retail
                        </span>

                    </div>

                </div>

            </div>

        </footer >
    );
};

export default Footer;