import React, { useState, useRef, useEffect } from 'react';

const CoreSolution = () => {
    const sectionRef = useRef(null);
    const [expandedIndex, setExpandedIndex] = useState(null);

    useEffect(() => {
        const handleClick = (event) => {
            if (event.target.closest(".card-item")) return;

            // warna close
            setExpandedIndex(null);
        };

        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    const allSolutions = [
        { title: "POSi", icon: "🧾", subheading: "POS & Inventory", desc: "Manage Billing, Inventory, Customers, Payments, and Reports seamlessly from a single Dashboard.", comingSoon: false },
        {
            title: "Cal-C",
            icon: "🧮",
            subheading: "Smart Sales Calculator",
            desc: "Calculate daily sales and automatically save every entry as a transaction — simple, fast, and hassle-free.",
            comingSoon: false
        },
        { title: "CATALOG", icon: "🛍️", subheading: "Online Catalog", desc: "A simple online catalogue to showcase, manage, and sell your products.", comingSoon: false },
        { title: "HRMS", icon: "👥", subheading: "Staff Management", desc: "Manage staff payroll and attendance.", comingSoon: true },
        { title: "Service Calendar", icon: "📅", subheading: "Booking System", desc: "Organize appointments and service slots effortlessly.", comingSoon: true },
        { title: "E-Dukan", icon: "🛒", subheading: "Online Store", desc: "Launch your full-fledged e-commerce store in minutes.", comingSoon: true },
    ];

    const handleCardClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section
            ref={sectionRef}
            onClick={() => setExpandedIndex(null)}
            id="solutions"
            className="relative py-10 px-4 bg-[#020617] overflow-visible"
        >
            {/* Glow Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.15),transparent_50%)]"></div>

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <span className="text-[#38BDF8] text-xs font-bold tracking-[3px] uppercase block mb-3">
                        Powering Your Business
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white">
                        Core <span className="text-[#38BDF8]">Solutions</span>
                    </h2>
                </div>

                {/* Cards */}
                <div className="flex md:grid md:grid-cols-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4">

                    {allSolutions.map((sol, index) => {
                        const isExpanded = expandedIndex === index;

                        return (
                            <div
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleCardClick(index);
                                }}
                                className={`
                                    card-item group relative cursor-pointer
                                    rounded-2xl p-5 mt-4 ml-4
                                    backdrop-blur-xl
                                    bg-white/[0.04]
                                    border ${isExpanded ? 'border-[#38BDF8]' : 'border-white/10'}
                                    transition-all duration-500 ease-in-out
                                    
                                    ${isExpanded
                                        ? 'shadow-[0_0_40px_rgba(56,189,248,0.25)] -translate-y-2 scale-[1.05] z-50'
                                        : 'hover:border-[#38BDF8]/40 hover:-translate-y-1 hover:scale-[1.02]'
                                    }

                                    min-w-[220px]  md:w-full
                                    snap-center
                                `}
                            >
                                {/* Coming Soon */}
                                {sol.comingSoon && (
                                    <div className="absolute top-0 right-0">
                                        <span className="bg-[#38BDF8] text-black text-[9px] font-bold px-2 py-1 rounded-bl-xl">
                                            Coming Soon
                                        </span>
                                    </div>
                                )}

                                {/* Icon */}
                                <div className={`
                                    w-14 h-14 flex items-center justify-center
                                    rounded-xl text-2xl
                                    bg-[#38BDF8]/10
                                    transition-all
                                    ${isExpanded ? 'bg-[#38BDF8] text-black scale-110' : 'text-[#38BDF8]'}
                                `}>
                                    {sol.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-base md:text-lg text-white font-semibold mt-3">
                                    {sol.title}
                                </h3>

                                {/* Subheading */}
                                <span className="text-xs text-[#38BDF8] font-medium">
                                    {sol.subheading}
                                </span>

                                {/* Description */}
                                <p className={`
                                    text-xs md:text-sm text-slate-400 leading-relaxed mt-2
                                    transition-all duration-300
                                    ${isExpanded ? 'opacity-100' : 'opacity-80'}
                                `}>
                                    {sol.desc}
                                </p>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CoreSolution;