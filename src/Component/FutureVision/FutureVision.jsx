import React from 'react';

const FutureVision = () => {
    return (
        <section className="relative bg-[#020617] py-12 px-6 overflow-hidden font-sans" id="vision">

            {/* Background Glows (Radial Gradients) */}
            <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-sky-500/10 blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="text-center mb-8">
                    <span className="inline-block bg-sky-500/10 text-sky-400 border border-sky-400/30 px-5 py-2 rounded-sm text-[10px] font-black tracking-[3px] uppercase mb-6 shadow-[0_0_20px_rgba(56,189,248,0.1)]">
                        UPCOMING TECH
                    </span>
                    <h2 className="text-3xl md:text-7xl font-black text-white leading-tight mb-6">
                        Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 animate-gradient">Traditional Billing</span>
                    </h2>
                    <p className="text-slate-400 text-sm md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                        Don't just manage your business—evolve it. Experience an intelligent retail ecosystem designed to forecast trends and automate growth.
                    </p>
                </div>

                {/* Grid Layout - All cards same design now */}
                <div className="grid grid-cols-3 gap-2 md:gap-6 mt-4">

                    {/* AI-Driven Forecast Card (Design synced with others) */}
                    <div className="group bg-slate-800/20 backdrop-blur-sm p-3 md:p-8 rounded-sm md:rounded-sm border border-white/5 hover:bg-slate-800/40 transition-all duration-300 flex flex-col items-center text-center">
                        <div className="w-8 h-8 md:w-16 md:h-16 bg-white/5 flex items-center justify-center rounded-lg md:rounded-2xl text-lg md:text-3xl group-hover:bg-sky-500 transition-colors mb-3 shrink-0">
                            🤖
                        </div>
                        <h4 className="text-[10px] md:text-xl font-bold text-white mb-1">AI Forecast</h4>
                        <p className="hidden md:block text-slate-400 text-xs font-medium">Predict future demand.</p>
                    </div>

                    {/* B2B Marketplace Card */}
                    <div className="group bg-slate-800/20 backdrop-blur-sm p-3 md:p-8 rounded-sm md:rounded-3xl border border-white/5 hover:bg-slate-800/40 transition-all duration-300 flex flex-col items-center text-center">
                        <div className="w-8 h-8 md:w-16 md:h-16 bg-white/5 flex items-center justify-center rounded-lg md:rounded-2xl text-lg md:text-3xl group-hover:bg-sky-500 transition-colors mb-3 shrink-0">
                            🤝
                        </div>
                        <h4 className="text-[10px] md:text-xl font-bold text-white mb-1">B2B Market</h4>
                        <p className="hidden md:block text-slate-400 text-xs font-medium">Direct factory connect.</p>
                    </div>

                    {/* Predictive Analytics Card */}
                    <div className="group bg-slate-800/20 backdrop-blur-sm p-3 md:p-8 rounded-sm md:rounded-3xl border border-white/5 hover:bg-slate-800/40 transition-all duration-300 flex flex-col items-center text-center">
                        <div className="w-8 h-8 md:w-16 md:h-16 bg-white/5 flex items-center justify-center rounded-lg md:rounded-2xl text-lg md:text-3xl group-hover:bg-indigo-500 transition-colors mb-3 shrink-0">
                            📊
                        </div>
                        <h4 className="text-[10px] md:text-xl font-bold text-white mb-1">Analytics</h4>
                        <p className="hidden md:block text-slate-400 text-xs font-medium">Profit & loss insights.</p>
                    </div>
                </div>

                {/* Bottom Hashtags - Mobile Fix */}
                <div className="mt-8 flex flex-row items-center justify-center gap-2 md:gap-8 text-slate-600 font-black uppercase tracking-[1px] md:tracking-widest italic">
                    <span className="whitespace-nowrap text-[8px] md:text-xs">#SmartRetail</span>
                    <span className="w-1 h-1 bg-slate-800 rounded-full md:hidden"></span> {/* Mobile divider dot */}
                    <span className="whitespace-nowrap text-[8px] md:text-xs">#FutureOfPOS</span>
                    <span className="w-1 h-1 bg-slate-800 rounded-full md:hidden"></span> {/* Mobile divider dot */}
                    <span className="whitespace-nowrap text-[8px] md:text-xs">#SellarIntelligence</span>
                </div>
            </div>
        </section>
    );
};

export default FutureVision;