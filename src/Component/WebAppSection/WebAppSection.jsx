import React from 'react';
import {
    Globe,
    Smartphone,
    Cloud,
    MonitorSmartphone,
} from 'lucide-react';

const POINTS = [
    {
        id: 'no-install',
        title: 'Just Like a Website',
        color: '#0284c7', // sky
        colorSoft: '#e0f2fe',
        icon: Globe,
    },
    {
        id: 'no-storage',
        title: "Zero Storage Used On Your Phone",
        color: '#059669', // emerald
        colorSoft: '#d1fae5',
        icon: Smartphone,
    },
    {
        id: 'cloud-data',
        title: 'Your Data Lives on the Cloud',
        color: '#7c3aed', // violet
        colorSoft: '#ede9fe',
        icon: Cloud,
    },
    {
        id: 'multi-device',
        title: 'Works Across All Your Devices',
        color: '#f97316', // orange
        colorSoft: '#ffedd5',
        icon: MonitorSmartphone,
    },
];

const WebAppSection = () => {
    return (
        <section
            id="webApp"
            className="relative w-full py-12 overflow-hidden bg-sky-100"
        >
            {/* Subtle dot-grid tech texture */}
            <div
                className="absolute inset-0 opacity-[0.35]"
                style={{
                    backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
                    backgroundSize: '26px 26px',
                    maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
                }}
            ></div>

            {/* Ambient colour orbs — layered "aurora" wash */}
            <div className="absolute -top-20 -left-16 w-[420px] h-[420px] bg-sky-200/50 rounded-full blur-3xl"></div>
            <div className="absolute top-10 right-0 w-[380px] h-[380px] bg-violet-200/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-100px] left-1/3 w-[440px] h-[440px] bg-cyan-100/60 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-pink-100/40 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
                <div className="flex flex-col md:flex-row items-center gap-14 md:gap-32">

                    {/* Left */}
                    <div className="w-full md:w-1/2 flex justify-center md:scale-125">
                        <img
                            src="/WebApp.png"
                            alt="Sellar running across devices"
                            className="w-full max-w-[2060px] rounded-3xl"
                        />
                    </div>

                    {/* Right */}
                    <div className="w-full md:w-1/2">
                        <span className="inline-block text-sm font-bold tracking-widest text-sky-600 uppercase mb-3">
                            No Installation Needed
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-[#00171f] leading-[1.15] tracking-tight mb-5">
                            It's a Web App. Not Another App to Install.
                        </h2>
                        <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                            No download, no update, no storage eaten up on your phone. Sellar works like a website. Open it anytime, from anywhere, on any device.
                        </p>

                        {/* Points */}
                        <div className="flex flex-col gap-6">
                            {POINTS.map((point) => {
                                const Icon = point.icon;

                                return (
                                    <div key={point.id}>

                                        {/* Icon + Heading */}
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                                                style={{ backgroundColor: point.colorSoft }}
                                            >
                                                <Icon
                                                    size={20}
                                                    style={{ color: point.color }}
                                                />
                                            </div>

                                            <h3 className="font-bold text-base md:text-lg text-[#00171f]">
                                                {point.title}
                                            </h3>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebAppSection;