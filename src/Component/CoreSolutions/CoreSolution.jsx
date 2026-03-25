import React, { useState } from 'react';

const   CoreSolution = () => {
    // Mobile par kaunsa card open hai uska state
    const [expandedIndex, setExpandedIndex] = useState(null);

    const allSolutions = [
        { 
            title: "POSI", 
            icon: "🧾", 
            subheading: "POS & Inventory", 
            desc: "Manage Billing, Inventory, Customers, Payments, and Reports seamlessly from a single Dashboard.", 
            comingSoon: false 
        },
        { 
            title: "CATALOG", 
            icon: "🛍️", 
            subheading: "Online Catalog", 
            desc: "A simple online catalogue to showcase, manage, and sell your products.", 
            comingSoon: false 
        },
        { 
            title: "HRMS", 
            icon: "👥", 
            subheading: "Staff Management", 
            desc: "Manage staff payroll and attendance.", 
            comingSoon: true 
        },
        { 
            title: "Service Calendar", 
            icon: "📅", 
            subheading: "Booking System", 
            desc: "Organize appointments and service slots effortlessly.", 
            comingSoon: true 
        },
        { 
            title: "E-Dukan", 
            icon: "🛒", 
            subheading: "Online Store", 
            desc: "Launch your full-fledged e-commerce store in minutes.", 
            comingSoon: true 
        },
    ];

    const handleCardClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section 
            id="solutions" 
            className="relative py-12 px-4 bg-[#0f172a] overflow-hidden"
        >
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle_at_0%_0%,rgba(0,126,167,0.15)_0%,transparent_50%)] z-0"></div>

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-[#00A8E8] text-xs font-extrabold tracking-[2px] uppercase block mb-2">
                        Powering Your Business
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                        Core <span className="text-[#00A8E8]">Solutions</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 gap-3 md:gap-5">
                    {allSolutions.map((sol, index) => {
                        const isExpanded = expandedIndex === index;
                        
                        return (
                            <div 
                                key={index}
                                onClick={() => handleCardClick(index)}
                                className={`
                                    group relative cursor-pointer
                                    bg-slate-800/70 backdrop-blur-md 
                                    border ${isExpanded ? 'border-[#00A8E8]' : 'border-white/5'} rounded-sm 
                                    p-4 md:p-6 
                                    flex flex-col gap-2 
                                    transition-all duration-500 ease-in-out 
                                    ${isExpanded ? 'shadow-2xl shadow-[#00A8E8]/20 -translate-y-1' : 'hover:border-white/10'}
                                    overflow-hidden
                                    last:odd:col-span-2 last:odd:justify-self-center last:odd:w-full md:last:odd:max-w-[490px]
                                `}
                            >
                                {/* --- CORNER NEON BADGE --- */}
                                {sol.comingSoon && (
                                    <div className="absolute top-0 right-0 z-20 pointer-events-none">
                                        <div className="relative">
                                            {/* Glow Behind */}
                                            <div className="absolute inset-0 bg-[#00A8E8] blur-[8px] opacity-30"></div>
                                            <span className="relative block bg-[#00A8E8] text-white text-[6px] md:text-[9px] font-[1000] px-2 py-1 rounded-bl-xl tracking-tighter uppercase shadow-lg border-l border-b border-white/20">
                                                Coming Soon
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {/* Card content */}
                                <div className="flex flex-col gap-2">
                                    
                                    {/* Header (Icon + Title) */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00A8E8]/10 text-xl flex items-center justify-center rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-105">
                                            {sol.icon}
                                        </div>
                                        <h3 className="text-[13px] md:text-lg text-slate-50 font-bold">
                                            {sol.title}
                                        </h3>
                                    </div>

                                    {/* Animated Content (Expandable) */}
                                    <div className={`
                                        grid transition-all duration-100 ease-in-out
                                        ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 md:grid-rows-[1fr] md:opacity-100 md:mt-3'}
                                    `}>
                                        <div className="overflow-hidden">
                                            <div className="flex flex-col gap-1 border-t border-white/10 pt-3 md:border-0 md:pt-0">
                                                {sol.subheading && (
                                                    <h4 className="text-[11px] md:text-md text-[#00A8E8] font-bold">
                                                        {sol.subheading}
                                                    </h4>
                                                )}
                                                <p className="text-[10px] md:text-sm text-slate-400 leading-relaxed">
                                                    {sol.desc || "More details coming soon..."}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Dropdown Icon */}
                                {!sol.comingSoon && (
                                    <div className={`md:hidden absolute bottom-1 right-3 text-[#00A8E8] transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
                                        <span className="text-[10px] opacity-40">▼</span>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CoreSolution;