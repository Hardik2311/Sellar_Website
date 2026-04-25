import React, { useState } from 'react';

// Animation for image slide
const animationStyle = `
  @keyframes slideIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const CalciShowCase = () => {
    const [activeTab, setActiveTab] = useState(0);

    const calciFeatures = [
        {
            title: "Dashboard",
            icon: "📊",
            desc: "See your total sales, trends, and performance at a glance.",
            img: "/CalciImages/Dashboard.jpeg"
        },
        {
            title: "Calculator",
            icon: "🧮",
            desc: "Just enter your sales and let the calculator handle the totals.",
            img: "/CalciImages/Calculator.jpeg"
        },
        {
            title: "Transaction Page",
            icon: "💳",
            desc: "Track every transaction and never miss a single sale.",
            img: "/CalciImages/Transaction.jpeg"
        },
    ];

    return (
        <section className="relative pt-8 pb-10 px-5 before:bg-[radial-gradient(circle_at_top,_#f1f5f9_0%,_#e2e8f0_60%,_#d1d5db_100%)] overflow-hidden font-sans" id='catalog'>
            <style>{animationStyle}</style>

            <div className="max-w-7xl mx-auto">
                {/* --- HEADER --- */}
                <div className="text-center mb-12">
                    <div className="flex flex-col items-center mb-2">
                        <h1 className="text-5xl md:text-6xl font-[1000] text-slate-950 tracking-tighter leading-none uppercase">
                            CAL-<span className="text-[#007EA7]">C</span>
                        </h1>
                        <div className="h-1.5 w-16 bg-[#007EA7] rounded-full mt-1"></div>
                    </div>
                    <span className="inline-block px-4 py-1.5 bg-slate-200 text-[#007EA7] rounded-full text-[11px] font-extrabold tracking-[2px] mb-4 mt-4">
                        Track Every Sale, Effortlessly
                    </span>
                    <h2 className="text-3xl md:text-7xl font-black text-slate-900 leading-[1.1]">
                        Manage Your Sales
                    </h2>
                    <p className="text-[#007EA7] text-2xl md:text-5xl font-bold">Without the Hassle</p>
                    <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
                        Calculate sales and auto-save every entry as a transaction — quick, simple, and hassle-free.
                    </p>
                </div>

                {/* --- DISPLAY CONTAINER --- */}
                <div className="flex flex-row items-center justify-between gap-3">

                    {/* --- INTERACTIVE BUTTONS --- */}
                    <div className="order-1 flex flex-col gap-5 md:gap-4 w-[35%] md:w-full items-center md:items-stretch">
                        {calciFeatures.map((f, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(i)}
                                className={`
                                    group transition-all duration-300 cursor-pointer
                                    flex flex-col items-center gap-1.5 bg-transparent border-0 p-0 w-full
                                    md:flex-row md:gap-4 md:p-5 md:bg-white md:border md:border-slate-400 md:rounded-2xl md:text-left
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
                                    ${activeTab === i ? 'md:bg-[#007EA7] md:text-white' : ''}
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
                    <div className="order-2 flex justify-center md:justify-center w-[62%] md:w-full relative">
                        <div className="relative bg-black border-[8px] md:border-[12px] border-slate-800 rounded-[35px] md:rounded-[55px] shadow-2xl overflow-hidden w-[215px] h-[440px] xs:w-[180px] xs:h-[370px]  md:w-[300px] md:h-[600px]">

                            <div className="w-full h-full bg-white rounded-[26px] md:rounded-[43px] overflow-hidden flex items-center justify-center">

                                <div key={activeTab} className="w-full h-full animate-[slideIn_0.4s_ease-out] flex items-center justify-center">
                                    <img
                                        src={calciFeatures[activeTab].img}
                                        alt={calciFeatures[activeTab].title}
                                        className="max-w-full max-h-full object-cover"
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

export default CalciShowCase;