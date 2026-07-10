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
        {
            title: "Dashboard",
            icon: "📑",
            desc: "Manage and share all your catalogues in one place",
            img: "/CatalogueShowCaseImages/CataDashboard.png"
        },
        {
            title: "Orders",
            icon: "💬",
            desc: "Receive and manage customer orders directly from WhatsApp",
            img: "/CatalogueShowCaseImages/CataOrders.png"
        },
        {
            title: "Shop Page",
            icon: "💰",
            desc: "Customize your online shop with pricing and product details",
            img: "/CatalogueShowCaseImages/CataShop.png"
        },
        {
            title: "Item Page",
            icon: "🔍",
            desc: "Let customers view products instantly with shareable links",
            img: "/CatalogueShowCaseImages/CataItems.jpeg"
        }
    ];

    return (
        <section className="relative pt-8 pb-10 px-5 bg-[radial-gradient(circle_at_100%_100%,#fffbf7_0%,#fff3e8_40%,#ffe4cc_100%)] overflow-hidden font-sans" id='catalog'>
            <style>{animationStyle}</style>

            <div className="max-w-7xl mx-auto">
                {/* --- HEADER --- */}
                <div className="text-center mb-12">
                    <div className="flex flex-col items-center mb-2">
                        <h1 className="text-5xl md:text-6xl font-[1000] text-slate-950 tracking-tighter mb-0 leading-none uppercase">
                            CATA<span className="text-[#f97316]">LOG</span>
                        </h1>
                        <div className="h-1.5 w-16 bg-[#f97316] rounded-full mt-1"></div>
                    </div>
                    <span className="inline-block px-4 py-1.5 bg-slate-200 text-[#f97316] rounded-full text-[11px] font-extrabold tracking-[2px] mb-4 mt-4">
                        Smart Digital Storefront
                    </span>
                    <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.1]">
                        Digital Presence
                    </h2>
                    <p className="text-[#f97316] text-2xl md:text-5xl font-bold">Redefined</p>
                    <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
                        Showcase and sell products with a digital catalogue — connect with customers effortlessly.
                    </p>
                </div>

                {/* --- DISPLAY CONTAINER --- */}
                <div className="flex flex-row items-center justify-between gap-3">

                    {/* --- INTERACTIVE BUTTONS --- */}
                    <div className="order-2 flex flex-col gap-5 md:gap-4 w-[35%] md:w-full items-center md:items-stretch">
                        {catalogueFeatures.map((f, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(i)}
                                className={`
                                    group transition-all duration-300 cursor-pointer
                                    flex flex-col items-center gap-1.5 bg-transparent border-0 p-0 w-full
                                    md:flex-row md:gap-4 md:p-5 md:bg-white md:border md:border-slate-200 md:rounded-2xl md:text-left
                                    ${activeTab === i
                                        ? 'md:border-[#f97316] md:shadow-lg md:translate-x-2'
                                        : 'opacity-70 md:opacity-100'}
                                `}
                            >
                                {/* ICON BOX */}
                                <div className={`
                                    flex items-center justify-center shrink-0 transition-all
                                    w-[52px] h-[52px] xs:w-[45px] xs:h-[45px] text-xl rounded-sm border-2
                                    ${activeTab === i
                                        ? 'bg-sky-50 border-[#f97316] text-[#f97316]'
                                        : 'bg-white border-slate-200 text-slate-900'}
                                    md:w-[55px] md:h-[55px] md:text-2xl md:rounded-2xl md:border-0
                                    ${activeTab === i ? 'md:bg-[#f97316] md:text-white' : ''}
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

                    {/* --- PHONE FRAME --- */}
                    <div className="order-1 flex justify-center md:justify-center w-[62%] md:w-full relative">
                        <div className="relative bg-black border-[8px] md:border-[12px] border-slate-800 rounded-[35px] md:rounded-[55px] shadow-2xl overflow-hidden w-[215px] h-[440px] xs:w-[180px] xs:h-[370px]  md:w-[300px] md:h-[600px]">

                            <div className="w-full h-full bg-white rounded-[26px] md:rounded-[43px] overflow-hidden flex items-center justify-center">

                                <div key={activeTab} className="w-full h-full animate-[slideIn_0.4s_ease-out] flex items-center justify-center">
                                    <img
                                        src={catalogueFeatures[activeTab].img}
                                        alt={catalogueFeatures[activeTab].title}
                                        className="max-w-full max-h-full object-contain"
                                    />
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