import React from 'react';
import dashboardImg from '../../../public/HeroImg.png';
import {
    Receipt,
    MessageCircle,
    Package,
    BarChart3,
    Users,
    FileCheck2,
    Cloud,
    Store
} from "lucide-react";

const HeroSection = () => {
    return (
        <header
            id="home"
            className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-sky-100 via-sky-50 to-white"
        >
            {/* Subtle background accent shapes */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-100/60 rounded-full blur-3xl"></div>

            {/* Main Content */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-[60%_40%] md:-translate-x-12 gap-2 md:gap-10 items-center py-12">

                {/* Dashboard Image */}
                <div className="mt-20 md:hidden w-full flex items-center justify-center">
                    <img
                        src={dashboardImg}
                        alt="Sellar dashboard preview"
                        className="w-full max-w-3xl object-contain drop-shadow-2xl scale-100"
                    />
                </div>

                {/* Text Content */}
                <div className="order-1 md:order-1 md:col-start-1 md:row-start-1 flex flex-col items-start justify-center text-left w-full">

                    {/* Title */}
                    <h1 className="sm:mt-12 md:mt-16 text-[35px] sm:text-4xl md:text-6xl font-black text-[#00171f] leading-[1.2] md:leading-[1.1] tracking-tight mb-4 whitespace-nowrap">
                        <span>Your Entire Business, </span>
                        <span className="block md:text-7xl text-[50px] bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
                            One App.
                        </span>
                    </h1>

                    {/* Short Description */}
                    <p className="mb-6 max-w-xl text-sm md:text-lg text-slate-600 leading-relaxed">
                        Sellar is your simple, smart solution for billing and catalog management.
                    </p>

                    {/* Buttons */}
                    <div className="mb-4 flex flex-row gap-3 md:gap-4 w-full sm:w-auto">

                        {/* Primary Button */}
                        <a
                            className="flex-1 sm:flex-none bg-[#00171f] text-white px-4 md:px-8 py-4 rounded-lg font-bold hover:-translate-y-1 transition-all duration-300 shadow-xl hover:bg-[#002733] whitespace-nowrap text-center"
                            href="https://app.sellar.in/signup"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Start Free Trial
                        </a>

                        {/* Secondary Button */}
                        <button
                            onClick={() =>
                                window.open(
                                    "https://wa.me/9818815838?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo.",
                                    "_blank",
                                    "noopener,noreferrer"
                                )
                            }
                            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white text-[#00171f] px-4 md:px-8 py-4 rounded-lg font-bold border border-sky-300 hover:bg-sky-50 transition-all duration-300 whitespace-nowrap"
                        >
                            <span className="text-xs">💬</span>
                            Book Demo
                        </button>
                    </div>

                    {/* Key Features */}
                    <div className="mt-4 grid grid-cols-4 gap-x-4 gap-y-5 w-full max-w-xl">

                        {/* Billing */}
                        <div className="flex flex-col items-center gap-2 text-center group">
                            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-sky-100 border border-sky-200 text-sky-600 shadow-sm group-hover:bg-sky-500 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                                <Receipt size={20} strokeWidth={2} />
                            </div>
                            <span className="text-xs md:text-sm font-semibold text-[#00171f] whitespace-nowrap">
                                Billing
                            </span>
                        </div>

                        {/* Inventory */}
                        <div className="flex flex-col items-center gap-2 text-center group">
                            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-orange-100 border border-orange-200 text-orange-600 shadow-sm group-hover:bg-orange-500 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                                <Package size={20} strokeWidth={2} />
                            </div>
                            <span className="text-xs md:text-sm font-semibold text-[#00171f] whitespace-nowrap">
                                Inventory
                            </span>
                        </div>
                        {/* GST */}
                        <div className="flex flex-col items-center gap-2 text-center group">
                            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-600 shadow-sm group-hover:bg-emerald-500 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                                <FileCheck2 size={20} strokeWidth={2} />
                            </div>
                            <span className="text-xs md:text-sm font-semibold text-[#00171f] whitespace-nowrap">
                                GST
                            </span>
                        </div>

                        {/* Reports */}
                        <div className="flex flex-col items-center gap-2 text-center group">
                            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-violet-100 border border-violet-200 text-violet-600 shadow-sm group-hover:bg-violet-500 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                                <BarChart3 size={20} strokeWidth={2} />
                            </div>
                            <span className="text-xs md:text-sm font-semibold text-[#00171f] whitespace-nowrap">
                                Reports
                            </span>
                        </div>

                        {/* Staff */}
                        <div className="flex flex-col items-center gap-2 text-center group">
                            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-indigo-100 border border-indigo-200 text-indigo-600 shadow-sm group-hover:bg-indigo-500 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                                <Users size={20} strokeWidth={2} />
                            </div>
                            <span className="text-xs md:text-sm font-semibold text-[#00171f] whitespace-nowrap">
                                Staff
                            </span>
                        </div>


                        {/* WhatsApp */}
                        <div className="flex flex-col items-center gap-2 text-center group">
                            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-green-100 border border-green-200 text-green-600 shadow-sm group-hover:bg-green-500 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                                <MessageCircle size={20} strokeWidth={2} />
                            </div>
                            <span className="text-xs md:text-sm font-semibold text-[#00171f] whitespace-nowrap">
                                WhatsApp
                            </span>
                        </div>

                        {/* Cloud */}
                        <div className="flex flex-col items-center gap-2 text-center group">
                            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-100 border border-cyan-200 text-cyan-600 shadow-sm group-hover:bg-cyan-500 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                                <Cloud size={20} strokeWidth={2} />
                            </div>
                            <span className="text-xs md:text-sm font-semibold text-[#00171f] whitespace-nowrap">
                                Cloud
                            </span>
                        </div>

                        {/* Digital Store */}
                        <div className="flex flex-col items-center gap-2 text-center group">
                            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-pink-100 border border-pink-200 text-pink-600 shadow-sm group-hover:bg-pink-500 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                                <Store size={20} strokeWidth={2} />
                            </div>
                            <span className="text-xs md:text-sm font-semibold text-[#00171f] whitespace-nowrap">
                                Digital Store
                            </span>
                        </div>

                    </div>
                </div>

                {/* Dashboard Image - Desktop Only */}
                <div className="hidden md:flex order-2 md:order-2 md:col-start-2 md:row-start-1 md:row-span-2 w-full items-center justify-center">
                    <img
                        src={dashboardImg}
                        alt="Sellar dashboard preview"
                        className="w-full max-w-3xl object-contain drop-shadow-2xl scale-90 md:scale-150"
                    />
                </div>

                {/* CTA Section */}
                <div className="order-3 md:order-3 md:col-start-1 md:row-start-2 flex flex-col gap-5 w-full">

                    {/* Highlighted Trust Points */}
                    <div className="flex flex-nowrap items-center justify-center md:justify-start gap-x-3 sm:gap-x-6 gap-y-4 md:mt-0 mt-10 w-full">

                        {/* Active Users */}
                        <div className="flex items-center justify-center gap-1 sm:gap-2 min-w-0">
                            <span className="text-sky-500 text-xs sm:text-sm font-bold">
                                ✓
                            </span>
                            <span className="text-[12px] sm:text-sm md:text-base font-semibold text-[#00171f] whitespace-nowrap">
                                1100+ Active Users
                            </span>
                        </div>

                        {/* No Installation */}
                        <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                            <span className="text-sky-500 text-xs sm:text-sm font-bold">
                                ✓
                            </span>
                            <span className="text-[12px] sm:text-sm md:text-base font-semibold text-[#00171f] whitespace-nowrap">
                                No Installation
                            </span>
                        </div>

                        {/* Cloud Based */}
                        <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                            <span className="text-sky-500 text-xs sm:text-sm font-bold">
                                ✓
                            </span>
                            <span className="text-[12px] sm:text-sm md:text-base font-semibold text-[#00171f] whitespace-nowrap">
                                Cloud Based
                            </span>
                        </div>

                    </div>
                </div>

            </div>
        </header>
    );
};

export default HeroSection;

