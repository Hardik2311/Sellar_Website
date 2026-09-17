import React, { useState } from "react";
import {
    ArrowLeftRight,
    Barcode,
    ScanLine,
    MessageCircle,
    ArrowRight,
} from "lucide-react";

const FEATURES = [
    {
        id: "stock-transfer",
        title: "Stock Transfer (Godown ⇄ Shop)",
        color: "#f97316",
        colorSoft: "#ffedd5",
        icon: ArrowLeftRight,
        image: "/Stock Transfer.png",
    },
    {
        id: "generate-barcode",
        title: "Generate Barcodes",
        color: "#db2777",
        colorSoft: "#fce7f3",
        icon: Barcode,
        image: "/Generate-Barcodes.png",
    },
    {
        id: "scan-barcode",
        title: "Scan Barcodes with Your Phone",
        color: "#9333ea",
        colorSoft: "#f3e8ff",
        icon: ScanLine,
        image: "/Barcode-Scan.png",
    },
    {
        id: "whatsapp-share",
        title: "Share Bills on WhatsApp",
        color: "#0d9488",
        colorSoft: "#ccfbf1",
        icon: MessageCircle,
        image: "/WhatsApp Share.png",
    },
];


const SmoothImage = ({ feature, className = "" }) => {
    return (
        <img
            key={feature.id}
            src={feature.image}
            alt={feature.title}
            className={className}
        />
    );
};

const DesktopImage = ({ feature, className = "" }) => {
    return (
        <img
            key={feature.id}
            src={feature.image}
            alt={feature.title}
            className={className}
        />
    );
};

const FeaturesSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

    const handleDesktopSelect = (index) => {
        setActiveIndex(index);
    };

    const handleMobileSelect = (index) => {
        setMobileActiveIndex(index);
    };

    return (
        <section
            id="features"
            className="relative w-full overflow-hidden bg-white py-12"
        >
            <div className="absolute left-1/3 top-0 h-[400px] w-[400px] rounded-full bg-blue-200/40 blur-3xl" />

            <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-sky-300/30 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-6 md:px-10">

                <div className="mb-6 max-w-2xl text-left">
                    <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-sky-600">
                        Everything, Built In
                    </span>

                    <h2 className="text-3xl font-black leading-[1.15] tracking-tight text-[#00171f] md:text-5xl">
                        One App That Runs Every Corner of Your Shop
                    </h2>

                    <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                        From billing to barcodes, here's everything Sellar handles
                        for you so you don't need six different tools.
                    </p>
                </div>

                <div className="flex flex-col items-start gap-4 md:flex-row md:gap-16">

                    {/* MOBILE */}

                    <div className="flex w-full flex-col gap-4 md:hidden">

                        <div className="grid grid-cols-2 gap-3">
                            {FEATURES.slice(0, 2).map((feature, index) => {
                                const Icon = feature.icon;
                                const isActive = index === mobileActiveIndex;

                                return (
                                    <button
                                        key={feature.id}
                                        type="button"
                                        onClick={() => handleMobileSelect(index)}
                                        className="group relative min-h-[125px] w-full cursor-pointer overflow-hidden rounded-2xl border bg-white p-3 text-center transition-all duration-300 active:scale-[0.97]"
                                        style={{
                                            borderColor: isActive
                                                ? feature.color
                                                : "#e2e8f0",
                                            boxShadow: isActive
                                                ? `0 8px 20px -10px rgba(0,0,0,0.35)`
                                                : "0 2px 8px rgba(0,0,0,0.04)",
                                        }}
                                    >
                                        <div
                                            className="absolute left-0 top-0 h-1 w-full"
                                            style={{
                                                backgroundColor: feature.color,
                                                opacity: isActive ? 1 : 0,
                                            }}
                                        />

                                        <div
                                            className="absolute right-3 top-3 h-2 w-2 rounded-full"
                                            style={{
                                                backgroundColor: feature.color,
                                            }}
                                        />

                                        <div
                                            className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl"
                                            style={{
                                                backgroundColor: feature.colorSoft,
                                            }}
                                        >
                                            <Icon
                                                size={19}
                                                strokeWidth={2}
                                                style={{
                                                    color: feature.color,
                                                }}
                                            />
                                        </div>

                                        <h3
                                            className="mt-2 text-[11px] font-bold leading-tight"
                                            style={{
                                                color: isActive
                                                    ? feature.color
                                                    : "#334155",
                                            }}
                                        >
                                            {feature.title}
                                        </h3>

                                        <span
                                            className="mt-1 flex items-center justify-center gap-1 text-[9px] font-semibold opacity-80"
                                            style={{
                                                color: feature.color,
                                            }}
                                        >
                                            Click to explore
                                            <ArrowRight size={9} />
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="relative flex min-h-[310px] w-full items-center justify-center overflow-hidden sm:min-h-[380px]">
                            <SmoothImage
                                feature={FEATURES[mobileActiveIndex]}
                                className="block max-h-[280px] max-w-[92%] object-contain sm:max-h-[380px]"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            {FEATURES.slice(2, 4).map((feature, sliceIndex) => {
                                const index = sliceIndex + 2;
                                const Icon = feature.icon;
                                const isActive = index === mobileActiveIndex;

                                return (
                                    <button
                                        key={feature.id}
                                        type="button"
                                        onClick={() => handleMobileSelect(index)}
                                        className="group relative min-h-[125px] w-full cursor-pointer overflow-hidden rounded-2xl border bg-white p-3 text-center transition-all duration-300 active:scale-[0.97]"
                                        style={{
                                            borderColor: isActive
                                                ? feature.color
                                                : "#e2e8f0",
                                            boxShadow: isActive
                                                ? `0 8px 20px -10px rgba(0,0,0,0.35)`
                                                : "0 2px 8px rgba(0,0,0,0.04)",
                                        }}
                                    >
                                        <div
                                            className="absolute left-0 top-0 h-1 w-full"
                                            style={{
                                                backgroundColor: feature.color,
                                                opacity: isActive ? 1 : 0,
                                            }}
                                        />

                                        <div
                                            className="absolute right-3 top-3 h-2 w-2 rounded-full"
                                            style={{
                                                backgroundColor: feature.color,
                                            }}
                                        />

                                        <div
                                            className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl"
                                            style={{
                                                backgroundColor: feature.colorSoft,
                                            }}
                                        >
                                            <Icon
                                                size={19}
                                                strokeWidth={2}
                                                style={{
                                                    color: feature.color,
                                                }}
                                            />
                                        </div>

                                        <h3
                                            className="mt-2 text-[11px] font-bold leading-tight"
                                            style={{
                                                color: isActive
                                                    ? feature.color
                                                    : "#334155",
                                            }}
                                        >
                                            {feature.title}
                                        </h3>

                                        <span
                                            className="mt-1 flex items-center justify-center gap-1 text-[9px] font-semibold opacity-80"
                                            style={{
                                                color: feature.color,
                                            }}
                                        >
                                            Click to explore
                                            <ArrowRight size={9} />
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* DESKTOP */}

                    <div className="hidden w-full items-start gap-16 md:flex">

                        <div className="flex w-1/2 flex-col gap-4">
                            {FEATURES.map((feature, index) => {
                                const Icon = feature.icon;
                                const isActive = index === activeIndex;

                                return (
                                    <button
                                        key={feature.id}
                                        type="button"
                                        onClick={() => handleDesktopSelect(index)}
                                        className={`group relative w-full cursor-pointer overflow-hidden rounded-2xl border bg-white text-left transition-all duration-300 ease-out active:scale-[0.99] ${isActive
                                            ? "scale-[1.02] shadow-xl"
                                            : "border-slate-200 shadow-sm hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg"
                                            }`}
                                        style={{
                                            borderColor: isActive
                                                ? feature.color
                                                : undefined,
                                        }}
                                    >
                                        <div
                                            className="absolute left-0 top-0 h-full w-1"
                                            style={{
                                                backgroundColor: feature.color,
                                                opacity: isActive ? 1 : 0,
                                            }}
                                        />

                                        <div className="flex items-center gap-4 px-6 py-5">

                                            <div
                                                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                                                style={{
                                                    backgroundColor:
                                                        feature.colorSoft,
                                                }}
                                            >
                                                <Icon
                                                    size={21}
                                                    strokeWidth={2}
                                                    style={{
                                                        color: feature.color,
                                                    }}
                                                />
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <h3
                                                    className="block text-base font-bold leading-snug transition-colors duration-300 md:text-lg"
                                                    style={{
                                                        color: isActive
                                                            ? feature.color
                                                            : "#00171f",
                                                    }}
                                                >
                                                    {feature.title}
                                                </h3>

                                                <span
                                                    className="mt-1 flex items-center gap-1 text-xs font-semibold"
                                                    style={{
                                                        color: feature.color,
                                                        opacity: 0.8,
                                                    }}
                                                >
                                                    Click to explore
                                                    <ArrowRight size={12} />
                                                </span>
                                            </div>

                                            <div
                                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-1"
                                                style={{
                                                    backgroundColor:
                                                        feature.colorSoft,
                                                    color: feature.color,
                                                }}
                                            >
                                                <ArrowRight size={17} />
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="sticky top-16 -mt-20 flex w-1/2 items-center justify-center">
                            <DesktopImage
                                feature={FEATURES[activeIndex]}
                                className="block h-auto w-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;

