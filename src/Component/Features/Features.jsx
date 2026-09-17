import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowLeftRight,
    Barcode,
    ScanLine,
    MessageCircle,
    ArrowRight,
} from "lucide-react";

/* =========================================================
   FEATURES DATA
========================================================= */

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

/* =========================================================
   IMAGE ANIMATION
========================================================= */

const imageVariants = {
    initial: {
        opacity: 0,
        scale: 0.96,
    },
    animate: {
        opacity: 1,
        scale: 1,
    },
    exit: {
        opacity: 0,
        scale: 1.02,
    },
};

const imageTransition = {
    duration: 0.65,
    ease: [0.22, 1, 0.36, 1],
};

/* =========================================================
   SMOOTH IMAGE COMPONENT

   IMPORTANT:
   This component is outside FeaturesSection.
   This prevents one mobile image from remounting when
   the other mobile image changes.
========================================================= */

const SmoothImage = ({ feature, className = "" }) => {
    return (
        <AnimatePresence mode="sync" initial={false}>
            <motion.img
                key={feature.id}
                src={feature.image}
                alt={feature.title}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={imageTransition}
                className={className}
            />
        </AnimatePresence>
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

/* =========================================================
   FEATURES SECTION
========================================================= */

const FeaturesSection = () => {
    /* =====================================================
       DESKTOP ACTIVE FEATURE
    ===================================================== */

    const [activeIndex, setActiveIndex] = useState(0);

    /* =====================================================
       MOBILE TOP

       Default:
       Stock Transfer selected
    ===================================================== */

    const [topActiveIndex, setTopActiveIndex] = useState(0);

    /* =====================================================
       MOBILE BOTTOM

       Default:
       Scan Barcodes selected
    ===================================================== */

    const [bottomActiveIndex, setBottomActiveIndex] = useState(2);

    /* =====================================================
       DESKTOP SELECT
    ===================================================== */

    const handleDesktopSelect = (index) => {
        setActiveIndex(index);
    };

    /* =====================================================
       MOBILE TOP SELECT

       Only TOP section changes
    ===================================================== */

    const handleTopSelect = (index) => {
        setTopActiveIndex(index);
    };

    /* =====================================================
       MOBILE BOTTOM SELECT

       Only BOTTOM section changes
    ===================================================== */

    const handleBottomSelect = (index) => {
        setBottomActiveIndex(index);
    };

    return (
        <section id="features" className="relative w-full overflow-hidden bg-white py-8">
            {/* =====================================================
                BACKGROUND ACCENTS
            ===================================================== */}

            <div className="absolute left-1/3 top-0 h-[400px] w-[400px] rounded-full bg-blue-200/40 blur-3xl" />

            <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-sky-300/30 blur-3xl" />

            {/* =====================================================
                MAIN CONTAINER
            ===================================================== */}

            <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-6 md:px-10">
                {/* =================================================
                    SECTION HEADING
                ================================================= */}

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

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="flex flex-col items-start gap-4 md:flex-row md:gap-16">
                    {/* =================================================
                        MOBILE VIEW
                    ================================================= */}

                    <div className="flex w-full flex-col gap-5 md:hidden">
                        {/* =================================================
                            TOP FEATURE CARDS
                        ================================================= */}

                        <div className="grid grid-cols-2 gap-3">
                            {FEATURES.slice(0, 2).map((feature, index) => {
                                const Icon = feature.icon;
                                const isActive = index === topActiveIndex;

                                return (
                                    <button
                                        key={feature.id}
                                        type="button"
                                        onClick={() => handleTopSelect(index)}
                                        className={`group relative flex min-h-[125px] cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border bg-white p-3 text-center transition-all duration-300 ease-out active:scale-[0.97] ${isActive ? "shadow-lg" : "border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-lg"}`}
                                        style={{
                                            borderColor: isActive
                                                ? feature.color
                                                : undefined,
                                        }}
                                    >
                                        {/* TOP ACTIVE LINE */}

                                        <div
                                            className="absolute left-0 top-0 h-1 w-full transition-opacity duration-300"
                                            style={{
                                                backgroundColor: feature.color,
                                                opacity: isActive ? 1 : 0,
                                            }}
                                        />

                                        {/* CLICK DOT */}

                                        <div
                                            className="absolute right-3 top-3 h-2 w-2 rounded-full transition-transform duration-300 group-hover:scale-125"
                                            style={{
                                                backgroundColor: feature.color,
                                            }}
                                        />

                                        {/* ICON */}

                                        <div
                                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                                            style={{
                                                backgroundColor: feature.colorSoft,
                                            }}
                                        >
                                            <Icon
                                                size={20}
                                                strokeWidth={2}
                                                style={{
                                                    color: feature.color,
                                                }}
                                            />
                                        </div>

                                        {/* TITLE */}

                                        <h3
                                            className="block w-full text-[11px] font-bold leading-tight"
                                            style={{
                                                color: isActive
                                                    ? feature.color
                                                    : "#334155",
                                            }}
                                        >
                                            {feature.title}
                                        </h3>

                                        {/* CLICK TO EXPLORE */}

                                        <span
                                            className="flex items-center gap-1 text-[9px] font-semibold opacity-80"
                                            style={{
                                                color: feature.color,
                                            }}
                                        >
                                            Click to explore
                                            <ArrowRight size={10} />
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* =================================================
                            TOP IMAGE
                        ================================================= */}

                        <div className="relative flex h-[450px] w-full items-center justify-center overflow-hidden">
                            <SmoothImage
                                feature={FEATURES[topActiveIndex]}
                                className="absolute max-h-full max-w-full object-contain"
                            />
                        </div>

                        {/* =================================================
                            BOTTOM FEATURE CARDS
                        ================================================= */}

                        <div className="grid grid-cols-2 gap-3">
                            {FEATURES.slice(2, 4).map((feature, localIndex) => {
                                const index = localIndex + 2;
                                const Icon = feature.icon;
                                const isActive = index === bottomActiveIndex;

                                return (
                                    <button
                                        key={feature.id}
                                        type="button"
                                        onClick={() => handleBottomSelect(index)}
                                        className={`group relative flex min-h-[125px] cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border bg-white p-3 text-center transition-all duration-300 ease-out active:scale-[0.97] ${isActive ? "shadow-lg" : "border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-lg"}`}
                                        style={{
                                            borderColor: isActive
                                                ? feature.color
                                                : undefined,
                                        }}
                                    >
                                        {/* TOP ACTIVE LINE */}

                                        <div
                                            className="absolute left-0 top-0 h-1 w-full transition-opacity duration-300"
                                            style={{
                                                backgroundColor: feature.color,
                                                opacity: isActive ? 1 : 0,
                                            }}
                                        />

                                        {/* CLICK DOT */}

                                        <div
                                            className="absolute right-3 top-3 h-2 w-2 rounded-full transition-transform duration-300 group-hover:scale-125"
                                            style={{
                                                backgroundColor: feature.color,
                                            }}
                                        />

                                        {/* ICON */}

                                        <div
                                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                                            style={{
                                                backgroundColor: feature.colorSoft,
                                            }}
                                        >
                                            <Icon
                                                size={20}
                                                strokeWidth={2}
                                                style={{
                                                    color: feature.color,
                                                }}
                                            />
                                        </div>

                                        {/* TITLE */}

                                        <h3
                                            className="block w-full text-[11px] font-bold leading-tight"
                                            style={{
                                                color: isActive
                                                    ? feature.color
                                                    : "#334155",
                                            }}
                                        >
                                            {feature.title}
                                        </h3>

                                        {/* CLICK TO EXPLORE */}

                                        <span
                                            className="flex items-center gap-1 text-[9px] font-semibold opacity-80"
                                            style={{
                                                color: feature.color,
                                            }}
                                        >
                                            Click to explore
                                            <ArrowRight size={10} />
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* =================================================
                            BOTTOM IMAGE
                        ================================================= */}

                        <div className="relative flex h-[450px] w-full items-center justify-center overflow-hidden">
                            <SmoothImage
                                feature={FEATURES[bottomActiveIndex]}
                                className="absolute max-h-full max-w-full object-contain"
                            />
                        </div>
                    </div>

                    {/* =================================================
                        DESKTOP VIEW
                    ================================================= */}

                    <div className="hidden w-full items-start gap-16 md:flex">
                        {/* =================================================
                            DESKTOP FEATURE CARDS
                        ================================================= */}

                        <div className="flex w-1/2 flex-col gap-4">
                            {FEATURES.map((feature, index) => {
                                const Icon = feature.icon;
                                const isActive = index === activeIndex;

                                return (
                                    <button
                                        key={feature.id}
                                        type="button"
                                        onClick={() => handleDesktopSelect(index)}
                                        className={`group relative w-full cursor-pointer overflow-hidden rounded-2xl border bg-white text-left transition-all duration-300 ease-out active:scale-[0.99] ${isActive ? "scale-[1.02] shadow-xl" : "border-slate-200 shadow-sm hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg"}`}
                                        style={{
                                            borderColor: isActive
                                                ? feature.color
                                                : undefined,
                                        }}
                                    >
                                        {/* ACTIVE LEFT LINE */}

                                        <div
                                            className="absolute left-0 top-0 h-full w-1 transition-opacity duration-300"
                                            style={{
                                                backgroundColor: feature.color,
                                                opacity: isActive ? 1 : 0,
                                            }}
                                        />

                                        {/* CARD CONTENT */}

                                        <div className="flex items-center gap-4 px-6 py-5">
                                            {/* ICON */}

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

                                            {/* TITLE + HINT */}

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

                                            {/* ARROW BUTTON */}

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

                        {/* =================================================
                            DESKTOP IMAGE
                        ================================================= */}

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