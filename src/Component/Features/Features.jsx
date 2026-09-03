import React, { useState, useEffect, useRef } from 'react';
import {
    ArrowLeftRight,
    Barcode,
    ScanLine,
    MessageCircle,
} from 'lucide-react';

const FEATURES = [
    {
        id: 'stock-transfer',
        title: 'Stock Transfer (Godown ⇄ Shop)',
        color: '#f97316', // orange
        colorSoft: '#ffedd5',
        icon: ArrowLeftRight,
        image: '/Stock Transfer.png',
    },
    {
        id: 'generate-barcode',
        title: 'Generate Barcodes',
        color: '#db2777', // pink
        colorSoft: '#fce7f3',
        icon: Barcode,
        image: '/Generate-Barcodes.png',
    },
    {
        id: 'scan-barcode',
        title: 'Scan Barcodes with Your Phone',
        color: '#9333ea', // purple
        colorSoft: '#f3e8ff',
        icon: ScanLine,
        image: '/Barcode-Scan.png',
    },
    {
        id: 'whatsapp-share',
        title: 'Share Bills on WhatsApp',
        color: '#0d9488', // teal
        colorSoft: '#ccfbf1',
        icon: MessageCircle,
        image: '/WhatsApp Share.png',
    },
];

const SLIDE_DURATION = 4000; // ms per feature
const TICK = 40; // ms per progress tick

const FeaturesSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const elapsedRef = useRef(0);
    const activeIndexRef = useRef(0);

    useEffect(() => {
        const id = setInterval(() => {
            elapsedRef.current += TICK;

            if (elapsedRef.current >= SLIDE_DURATION) {
                elapsedRef.current = 0;
                activeIndexRef.current = (activeIndexRef.current + 1) % FEATURES.length;
                setActiveIndex(activeIndexRef.current);
                setProgress(0);
            } else {
                setProgress((elapsedRef.current / SLIDE_DURATION) * 100);
            }
        }, TICK);

        return () => clearInterval(id);
    }, []);

    const handleSelect = (index) => {
        activeIndexRef.current = index;
        elapsedRef.current = 0;
        setActiveIndex(index);
        setProgress(0);
    };

    const active = FEATURES[activeIndex];

    const renderImage = (feature, extraClass = '') => (
        <div className={`relative w-full max-w-[700px] ${extraClass}`}>
            <img
                key={feature.id}
                src={feature.image}
                alt={feature.title}
                className="block w-full h-auto object-contain"
                style={{
                    animation: 'fadeScale 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
            />
        </div>
    );

    return (
        <section
            id="features"
            className="relative w-full py-8 overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white"
        >
            {/* Ambient background accents, consistent with hero */}
            <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-sky-100/50 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-sky-200/30 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 md:px-10">

                {/* Headline */}
                <div className="text-left max-w-2xl mb-6">
                    <span className="inline-block text-sm font-bold tracking-widest text-sky-600 uppercase mb-3">
                        Everything, Built In
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-[#00171f] leading-[1.15] tracking-tight">
                        One App That Runs Every Corner of Your Shop
                    </h2>
                    <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
                        From billing to barcodes, here's everything Sellar handles for you so you don't need six different tools.
                    </p>
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-16">

                    {/* ================= MOBILE VIEW ================= */}
                    <div className="flex w-full flex-col gap-5 md:hidden">

                        {/* ================= TOP 2 CARDS ================= */}
                        <div className="grid grid-cols-2 gap-3">
                            {FEATURES.slice(0, 2).map((feature, index) => {
                                const Icon = feature.icon;
                                const isActive = index === activeIndex;

                                return (
                                    <button
                                        key={feature.id}
                                        onClick={() => handleSelect(index)}
                                        className={`relative flex min-h-[100px] flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border bg-white p-3 text-center transition-all duration-300 ${isActive
                                                ? "border-transparent shadow-lg"
                                                : "border-slate-100 shadow-sm"
                                            }`}
                                        style={{
                                            opacity: isActive ? 1 : 0.7,
                                            transform: isActive
                                                ? "scale(1.02)"
                                                : "scale(1)",
                                        }}
                                    >
                                        {/* Progress Bar */}
                                        <div className="absolute left-0 top-0 h-[3px] w-full bg-slate-100">
                                            <div
                                                className="h-full"
                                                style={{
                                                    width: isActive
                                                        ? `${progress}%`
                                                        : "0%",
                                                    backgroundColor: feature.color,
                                                    transition: isActive
                                                        ? "none"
                                                        : "width 0.3s ease",
                                                }}
                                            />
                                        </div>

                                        {/* Icon */}
                                        <div
                                            className="flex h-10 w-10 items-center justify-center rounded-lg"
                                            style={{
                                                backgroundColor: feature.colorSoft,
                                            }}
                                        >
                                            <Icon
                                                size={19}
                                                style={{ color: feature.color }}
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="text-[10px] font-bold leading-tight"
                                            style={{
                                                color: isActive
                                                    ? feature.color
                                                    : "#475569",
                                            }}
                                        >
                                            {feature.title}
                                        </h3>
                                    </button>
                                );
                            })}
                        </div>

                        {/* ================= IMAGE FOR TOP 2 ================= */}

                        {activeIndex < 2 && (
                            <div className="relative w-full overflow-hidden rounded-2xl">
                                <img
                                    key={active.id}
                                    src={active.image}
                                    alt={active.title}
                                    className="block h-auto w-full object-contain"
                                    style={{
                                        animation:
                                            "fadeScale 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                                    }}
                                />
                            </div>
                        )}

                        {/* ================= BOTTOM 2 CARDS ================= */}

                        <div className="grid grid-cols-2 gap-3">
                            {FEATURES.slice(2, 4).map((feature, localIndex) => {
                                const index = localIndex + 2;
                                const Icon = feature.icon;
                                const isActive = index === activeIndex;

                                return (
                                    <button
                                        key={feature.id}
                                        onClick={() => handleSelect(index)}
                                        className={`relative flex min-h-[100px] flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border bg-white p-3 text-center transition-all duration-300 ${isActive
                                                ? "border-transparent shadow-lg"
                                                : "border-slate-100 shadow-sm"
                                            }`}
                                        style={{
                                            opacity: isActive ? 1 : 0.7,
                                            transform: isActive
                                                ? "scale(1.02)"
                                                : "scale(1)",
                                        }}
                                    >
                                        {/* Progress Bar */}
                                        <div className="absolute left-0 top-0 h-[3px] w-full bg-slate-100">
                                            <div
                                                className="h-full"
                                                style={{
                                                    width: isActive
                                                        ? `${progress}%`
                                                        : "0%",
                                                    backgroundColor: feature.color,
                                                    transition: isActive
                                                        ? "none"
                                                        : "width 0.3s ease",
                                                }}
                                            />
                                        </div>

                                        {/* Icon */}
                                        <div
                                            className="flex h-10 w-10 items-center justify-center rounded-lg"
                                            style={{
                                                backgroundColor: feature.colorSoft,
                                            }}
                                        >
                                            <Icon
                                                size={19}
                                                style={{ color: feature.color }}
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="text-[10px] font-bold leading-tight"
                                            style={{
                                                color: isActive
                                                    ? feature.color
                                                    : "#475569",
                                            }}
                                        >
                                            {feature.title}
                                        </h3>
                                    </button>
                                );
                            })}
                        </div>

                        {/* ================= IMAGE FOR BOTTOM 2 ================= */}

                        {activeIndex >= 2 && (
                            <div className="relative w-full overflow-hidden rounded-2xl">
                                <img
                                    key={active.id}
                                    src={active.image}
                                    alt={active.title}
                                    className="block h-auto w-full object-contain"
                                    style={{
                                        animation:
                                            "fadeScale 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                                    }}
                                />
                            </div>
                        )}

                    </div>

                    {/* ================= DESKTOP VIEW ================= */}
                    <div className="hidden md:flex w-full gap-16 items-start">

                        {/* Left Feature List */}
                        <div className="w-1/2 flex flex-col gap-4">
                            {FEATURES.map((feature, index) => {
                                const Icon = feature.icon;
                                const isActive = index === activeIndex;

                                return (
                                    <button
                                        key={feature.id}
                                        onClick={() => handleSelect(index)}
                                        className={`group relative text-left bg-white rounded-2xl border transition-all duration-500 ease-out overflow-hidden ${isActive
                                            ? 'shadow-xl scale-[1.03] border-transparent'
                                            : 'shadow-sm scale-100 border-slate-100 hover:shadow-md hover:scale-[1.01]'
                                            }`}
                                        style={{
                                            opacity: isActive ? 1 : 0.75,
                                        }}
                                    >
                                        {/* Timeline progress track */}
                                        <div className="absolute top-0 left-0 w-full h-1 bg-slate-100">
                                            <div
                                                className="h-full"
                                                style={{
                                                    width: isActive
                                                        ? `${progress}%`
                                                        : index < activeIndex
                                                            ? '100%'
                                                            : '0%',
                                                    backgroundColor: feature.color,
                                                    transition: isActive
                                                        ? 'none'
                                                        : 'width 0.3s ease',
                                                }}
                                            />
                                        </div>

                                        <div className="flex items-start gap-4 px-6 py-5 pt-6">

                                            {/* Icon badge */}
                                            <div
                                                className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-500"
                                                style={{
                                                    backgroundColor: feature.colorSoft,
                                                    transform: isActive
                                                        ? 'scale(1.08)'
                                                        : 'scale(1)',
                                                }}
                                            >
                                                <Icon
                                                    size={20}
                                                    style={{ color: feature.color }}
                                                />
                                            </div>

                                            <div>
                                                <h3
                                                    className="font-bold text-base md:text-lg mb-1 transition-colors duration-300"
                                                    style={{
                                                        color: isActive
                                                            ? feature.color
                                                            : '#00171f',
                                                    }}
                                                >
                                                    {feature.title}
                                                </h3>

                                                <p className="text-sm text-slate-500 leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Right Feature Image */}
                        <div className="w-1/2 sticky top-16 -mt-20">
                            {renderImage(active)}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeScale {
                    from { opacity: 0; transform: scale(0.94); }
                    to { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </section>
    );
};

export default FeaturesSection;