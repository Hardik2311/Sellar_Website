import React, { useState } from 'react';
import heroBg from '../../assets/bg-main.png'; // Your local image

const HeroSection = () => {
    const [showDemo, setShowDemo] = useState(false);

    return (
        <header
            id="home"
            className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <img
                src={heroBg}
                alt="background"
                className="absolute inset-0 w-full h-full object-fill"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#00171f]/60 z-10"></div>

            {/* --- Main Content Container --- */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center h-full">

                <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl">

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6 drop-shadow-lg">
                        Run Your Entire Business.<br />
                        <span className="bg-gradient-to-br from-[#AEE2E6] to-white bg-clip-text text-transparent">
                            From One App!
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base md:text-xl text-slate-200 max-w-xl mx-auto mb-10 leading-relaxed drop-shadow-md">
                        Smart POS. Faster Billing.
                    </p>

                    {/* Buttons Wrapper */}
                    <div className="flex flex-col md:flex-row justify-center gap-4 w-full md:w-auto px-2">

                        {/* Primary Button */}
                        <a className="flex-1 md:flex-none bg-white text-[#00171f] px-8 py-4 rounded-sm font-bold hover:-translate-y-1 transition-all duration-300 shadow-xl hover:bg-slate-100 whitespace-nowrap" href="https://app.sellar.in/signup" target="_blank" rel="noopener noreferrer">
                            Start Free Trial
                        </a>

                        {/* Secondary Button */}
                        <button
                            onClick={() => setShowDemo(true)}
                            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-sm font-bold border border-white/50 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm whitespace-nowrap"
                        >
                            <span className="text-xs">▶</span> Watch Demo
                        </button>

                    </div>
                </div>
            </div>

            {/* --- Video Modal --- */}
            {showDemo && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#000b0f]/95 backdrop-blur-md p-5"
                    onClick={() => setShowDemo(false)}
                >
                    <div
                        className="relative w-full max-w-4xl bg-black rounded-3xl shadow-2xl overflow-hidden animate-[modalPop_0.4s_ease-out]"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            className="absolute z-10 top-4 right-4 md:-top-10 md:-right-10 bg-white/20 hover:bg-white text-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                            onClick={() => setShowDemo(false)}
                        >
                            ✕
                        </button>

                        <div className="relative pb-[56.25%] h-0">
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="Demo"
                                className="absolute top-0 left-0 w-full h-full border-0"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default HeroSection;