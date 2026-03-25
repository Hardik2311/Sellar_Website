import React, { useState } from 'react';

// Animation for image slide
const animationStyle = `
  @keyframes slideIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const CatalogueShowCase = () => {
    const [activeTab, setActiveTab] = useState(0);

    const catalogueFeatures = [
        { title: "Dashboard", icon: "📑", desc: "Catalogues in one click" },
        { title: "Orders", icon: "💬", desc: "Orders on chat" },
        { title: "Shop Page", icon: "💰", desc: "Manage rates" },
        { title: "Item Page", icon: "🔍", desc: "Scan-to-view" }
    ];

    return (
        <section className="relative py-12 px-4 md:py-20 bg-[radial-gradient(circle_at_100%_100%,#f8fafc_0%,#cbd5e1_100%)] overflow-hidden font-sans" id='catalog'>
            <style>{animationStyle}</style>

            <div className="max-w-7xl mx-auto">
                {/* --- HEADER --- */}
                <div className="text-center mb-12">
                    <div className="flex flex-col items-center mb-2">
                        <h1 className="text-5xl md:text-6xl font-[1000] text-slate-950 tracking-tighter mb-0 leading-none uppercase">
                            CATA<span className="text-[#007EA7]">LOG</span>
                        </h1>
                        <div className="h-1.5 w-16 bg-[#007EA7] rounded-full mt-1"></div>
                    </div>
                    <span className="inline-block px-4 py-1.5 bg-slate-200 text-[#007EA7] rounded-full text-[11px] font-extrabold tracking-[2px] mb-4 mt-4 uppercase">
                        Smart Digital Storefront
                    </span>
                    <h2 className="text-2xl md:text-5xl font-black text-slate-900 leading-[1.1]">
                        Digital Presence <br /> 
                        <span className="text-[#007EA7]">Redefined</span>
                    </h2>
                </div>

                {/* --- DISPLAY CONTAINER --- */}
                {/* Mobile: Wahi rahega jo pehle tha (flex-row-reverse) */}
                {/* Desktop: md:flex-row (Default direction) taaki Buttons Left aur Phone Right aa jaye */}
                <div className="flex flex-row-reverse md:flex-row items-center justify-between gap-3 md:gap-16">
                    
                    {/* --- INTERACTIVE BUTTONS --- */}
                    {/* Desktop: md:order-1 (Left Side) | Mobile: order-2 (Appears on Left due to flex-row-reverse) */}
                    <div className="order-2 md:order-1 flex flex-col gap-5 md:gap-4 w-[35%] md:w-full items-center md:items-stretch">
                        {catalogueFeatures.map((f, i) => (
                            <button 
                                key={i} 
                                onClick={() => setActiveTab(i)}
                                className={`
                                    group transition-all duration-300 cursor-pointer
                                    flex flex-col items-center gap-1.5 bg-transparent border-0 p-0 w-full
                                    md:flex-row md:gap-4 md:p-5 md:bg-white md:border md:border-slate-200 md:rounded-2xl md:text-left
                                    ${activeTab === i 
                                        ? 'md:border-[#007EA7] md:shadow-lg md:translate-x-2' 
                                        : 'opacity-70 md:opacity-100'}
                                `}
                            >
                                {/* ICON BOX */}
                                <div className={`
                                    flex items-center justify-center shrink-0 transition-all
                                    w-[52px] h-[52px] xs:w-[45px] xs:h-[45px] text-xl rounded-sm border-2
                                    ${activeTab === i 
                                        ? 'bg-sky-50 border-[#007EA7] text-[#007EA7]' 
                                        : 'bg-white border-slate-200 text-slate-900'}
                                    md:w-[55px] md:h-[55px] md:text-2xl md:rounded-2xl md:border-0
                                    md:bg-slate-50 ${activeTab === i ? 'md:bg-[#007EA7] md:text-white' : ''}
                                `}>
                                    {f.icon}
                                </div>

                                {/* TEXT CONTENT */}
                                <div className="flex flex-col">
                                    <h4 className="m-0 text-[10px] md:text-lg font-extrabold md:font-bold text-slate-900 whitespace-nowrap md:whitespace-normal">
                                        {f.title}
                                    </h4>
                                    <p className="hidden md:block m-0 mt-1 text-xs md:text-[13px] text-slate-500">
                                        {f.desc}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* --- IPHONE FRAME --- */}
                    {/* Desktop: md:order-2 (Right Side) | Mobile: order-1 (Appears on Right due to flex-row-reverse) */}
                    <div className="order-1 md:order-2 flex justify-center md:justify-center w-[62%] md:w-full relative">
                        {/* COMING SOON RIBBON */}
                        <div className="absolute z-30 w-full top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                            <div className="w-[100%] md:w-[60%] bg-[#007EA7]/95 backdrop-blur-md py-1.5 md:py-4 shadow-2xl border-y border-white/20 transform -rotate-3">
                                <p className="text-white text-center text-[10px] md:text-xl font-black tracking-widest uppercase whitespace-nowrap">
                                    Coming Soon
                                </p>
                            </div>
                        </div>

                        <div className="relative bg-black border-[8px] md:border-[12px] border-slate-800 rounded-[35px] md:rounded-[55px] shadow-2xl overflow-hidden 
                                    w-[215px] h-[440px] 
                                    xs:w-[180px] xs:h-[370px] 
                                    md:w-[300px] md:h-[600px]">
                            <div className="w-full h-full bg-white rounded-[26px] md:rounded-[43px] overflow-hidden relative">
                                <div key={activeTab} className="w-full h-full animate-[slideIn_0.4s_ease-out] bg-slate-50 flex flex-col p-4">
                                    <div className="h-24 md:h-32 w-full bg-[#007EA7]/10 rounded-xl mb-4"></div>
                                    <div className="space-y-2">
                                        <div className="h-3 w-3/4 bg-slate-200 rounded"></div>
                                        <div className="h-3 w-full bg-slate-100 rounded"></div>
                                        <div className="h-20 w-full bg-white border border-slate-100 rounded-lg mt-4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CatalogueShowCase;