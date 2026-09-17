import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    TrendingUp,
    BarChart3,
    BookUser,
    ShoppingBag,
    ArrowRight,
} from "lucide-react";

const REPORTS = [
    {
        id: "profit-loss",
        code: "P&L",
        title: "Profit & Loss Report",
        description:
            "See your business's real profit at a glance sales, expenses and margins, all in one report.",
        color: "#C9A227",
        icon: TrendingUp,
        image: "/P&L Report.png",
    },
    {
        id: "sales-report",
        code: "SAL",
        title: "Sales Report",
        description:
            "Track sales by day, week or month and see which item or customer is driving the most business.",
        color: "#3E8E7E",
        icon: BarChart3,
        image: "/Sales Report.png",
    },
    {
        id: "party-ledger",
        code: "LED",
        title: "Party Ledger",
        description:
            "A complete record for every customer and supplier what's owed, what's paid, all in one place.",
        color: "#B5651D",
        icon: BookUser,
        image: "/Party Ledger.png",
    },
    {
        id: "purchase-report",
        code: "PUR",
        title: "Purchase Report",
        description:
            "Keep a record of every purchase what you ordered from which supplier, and how much.",
        color: "#5B6E8C",
        icon: ShoppingBag,
        image: "/Purchase Report.png",
    },
];



/* =========================================================
   SMOOTH IMAGE
========================================================= */

const SmoothImage = ({ report, className = "" }) => {
    return (
        <img
            src={report.image}
            alt={report.title}
            className={className}
        />
    );
};
/* =========================================================
   REPORTS SECTION
========================================================= */

const ReportsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (index) => {
        setActiveIndex(index);
    };

    const active = REPORTS[activeIndex];

    return (
        <section
            id="reports"
            className="relative w-full overflow-hidden py-12"
            style={{
                background:
                    "linear-gradient(180deg, #0E3327 0%, #081F18 100%)",
            }}
        >
            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 md:px-6">
                {/* =================================================
                    HEADLINE
                ================================================= */}

                <div className="mb-10 max-w-2xl text-left sm:mb-14 md:mb-8">
                    <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A227] sm:mb-4">
                        Ledger &middot; Reports
                    </span>

                    <h2 className="text-2xl font-bold leading-[1.15] tracking-tight text-[#FBF7EE] sm:text-3xl md:text-5xl">
                        Everything You Need to Know About Your Business.
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-[#9FB3A8] sm:mt-4 sm:text-base md:text-lg">
                        From profit to purchases every report is ready, without a
                        single manual calculation.
                    </p>
                </div>

                {/* =================================================
                    MOBILE VIEW
                ================================================= */}

                <div className="flex w-full flex-col gap-4 md:hidden">
                    {/* =================================================
                        TOP REPORT BUTTONS
                    ================================================= */}

                    <div className="grid grid-cols-2 gap-3">
                        {REPORTS.slice(0, 2).map((report, index) => {
                            const Icon = report.icon;
                            const isActive = index === activeIndex;

                            return (
                                <button
                                    key={report.id}
                                    type="button"
                                    onClick={() => handleSelect(index)}
                                    className="group relative w-full cursor-pointer overflow-hidden rounded-xl bg-[#FBF7EE] text-left transition-all duration-300 active:scale-[0.97]"
                                    style={{
                                        boxShadow: isActive
                                            ? `0 8px 20px -10px rgba(0,0,0,0.45), inset 0 0 0 2px ${report.color}`
                                            : "inset 0 0 0 1px rgba(0,0,0,0.08)",
                                        transform: isActive
                                            ? "scale(1.02)"
                                            : "scale(1)",
                                        opacity: isActive ? 1 : 0.82,
                                    }}
                                >
                                    {/* ACTIVE TOP LINE */}

                                    <div
                                        className="absolute left-0 top-0 h-[3px] w-full transition-opacity duration-300"
                                        style={{
                                            backgroundColor: report.color,
                                            opacity: isActive ? 1 : 0,
                                        }}
                                    />

                                    <div className="flex items-center gap-3 px-3 py-4">
                                        {/* ICON */}

                                        <div
                                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-transform duration-300 group-hover:scale-105"
                                            style={{
                                                borderColor: report.color,
                                                backgroundColor: `${report.color}10`,
                                            }}
                                        >
                                            <Icon
                                                size={19}
                                                style={{
                                                    color: report.color,
                                                }}
                                            />
                                        </div>

                                        {/* TITLE */}

                                        <div className="min-w-0 flex-1">
                                            <h3
                                                className="text-xs font-semibold leading-tight"
                                                style={{
                                                    color: isActive
                                                        ? report.color
                                                        : "#1E2A22",
                                                    fontFamily:
                                                        'Georgia, "Times New Roman", serif',
                                                }}
                                            >
                                                {report.title}
                                            </h3>

                                            <span
                                                className="mt-1 flex items-center gap-1 text-[9px] font-semibold opacity-80"
                                                style={{
                                                    color: report.color,
                                                }}
                                            >
                                                Click to explore
                                                <ArrowRight size={9} />
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* =================================================
                        ACTIVE REPORT IMAGE
                    ================================================= */}

                    <div className="relative flex min-h-[300px] w-full items-center justify-center sm:min-h-[380px]">
                        <SmoothImage report={active} className="block h-auto w-full object-contain" />
                    </div>

                    {/* =================================================
                        BOTTOM REPORT BUTTONS
                    ================================================= */}

                    <div className="grid grid-cols-2 gap-3">
                        {REPORTS.slice(2, 4).map((report, sliceIndex) => {
                            const index = sliceIndex + 2;
                            const Icon = report.icon;
                            const isActive = index === activeIndex;

                            return (
                                <button
                                    key={report.id}
                                    type="button"
                                    onClick={() => handleSelect(index)}
                                    className="group relative w-full cursor-pointer overflow-hidden rounded-xl bg-[#FBF7EE] text-left transition-all duration-300 active:scale-[0.97]"
                                    style={{
                                        boxShadow: isActive
                                            ? `0 8px 20px -10px rgba(0,0,0,0.45), inset 0 0 0 2px ${report.color}`
                                            : "inset 0 0 0 1px rgba(0,0,0,0.08)",
                                        transform: isActive
                                            ? "scale(1.02)"
                                            : "scale(1)",
                                        opacity: isActive ? 1 : 0.82,
                                    }}
                                >
                                    {/* ACTIVE TOP LINE */}

                                    <div
                                        className="absolute left-0 top-0 h-[3px] w-full transition-opacity duration-300"
                                        style={{
                                            backgroundColor: report.color,
                                            opacity: isActive ? 1 : 0,
                                        }}
                                    />

                                    <div className="flex items-center gap-3 px-3 py-4">
                                        {/* ICON */}

                                        <div
                                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-transform duration-300 group-hover:scale-105"
                                            style={{
                                                borderColor: report.color,
                                                backgroundColor: `${report.color}10`,
                                            }}
                                        >
                                            <Icon
                                                size={19}
                                                style={{
                                                    color: report.color,
                                                }}
                                            />
                                        </div>

                                        {/* TITLE */}

                                        <div className="min-w-0 flex-1">
                                            <h3
                                                className="text-xs font-semibold leading-tight"
                                                style={{
                                                    color: isActive
                                                        ? report.color
                                                        : "#1E2A22",
                                                    fontFamily:
                                                        'Georgia, "Times New Roman", serif',
                                                }}
                                            >
                                                {report.title}
                                            </h3>

                                            <span
                                                className="mt-1 flex items-center gap-1 text-[9px] font-semibold opacity-80"
                                                style={{
                                                    color: report.color,
                                                }}
                                            >
                                                Click to explore
                                                <ArrowRight size={9} />
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* =================================================
                    DESKTOP VIEW
                ================================================= */}

                <div className="hidden w-full items-start gap-16 md:flex">
                    {/* =================================================
                        LEFT: REPORT IMAGE
                    ================================================= */}

                    <div className="sticky top-24 flex w-[55%] items-center justify-center">
                        <div className="relative flex aspect-[16/11] w-full max-w-[900px] items-center justify-center overflow-hidden">
                            <SmoothImage
                                report={active}
                                className="absolute inset-0 h-full w-full object-contain"
                            />
                        </div>
                    </div>

                    {/* =================================================
                        RIGHT: REPORT BUTTONS
                    ================================================= */}

                    <div className="grid w-[45%] grid-cols-2 gap-4">
                        {REPORTS.map((report, index) => {
                            const Icon = report.icon;
                            const isActive = index === activeIndex;

                            return (
                                <button
                                    key={report.id}
                                    type="button"
                                    onClick={() => handleSelect(index)}
                                    className="group relative cursor-pointer overflow-hidden rounded-md text-left transition-all duration-300 ease-out active:scale-[0.98]"
                                    style={{
                                        backgroundColor: "#FBF7EE",
                                        boxShadow: isActive
                                            ? `0 12px 30px -12px rgba(0,0,0,0.45), inset 0 0 0 2px ${report.color}`
                                            : "inset 0 0 0 1px rgba(0,0,0,0.06)",
                                        transform: isActive
                                            ? "scale(1.02)"
                                            : "scale(1)",
                                        opacity: isActive ? 1 : 0.82,
                                    }}
                                >
                                    {/* ACTIVE LEFT LINE */}

                                    <div
                                        className="absolute left-0 top-0 h-full w-[5px] transition-opacity duration-300"
                                        style={{
                                            backgroundColor: report.color,
                                            opacity: isActive ? 1 : 0.25,
                                        }}
                                    />

                                    {/* CARD CONTENT */}

                                    <div className="flex flex-col items-start gap-3 py-6 pl-6 pr-5">
                                        {/* ICON + CODE */}

                                        <div className="flex items-center gap-2.5">
                                            <div
                                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 group-hover:scale-105"
                                                style={{
                                                    borderColor: report.color,
                                                }}
                                            >
                                                <Icon
                                                    size={16}
                                                    style={{
                                                        color: report.color,
                                                    }}
                                                />
                                            </div>

                                            <span
                                                className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                                                style={{
                                                    color: report.color,
                                                    fontFamily:
                                                        "ui-monospace, SFMono-Regular, Menlo, monospace",
                                                }}
                                            >
                                                {report.code}
                                            </span>
                                        </div>

                                        {/* TITLE + DESCRIPTION */}

                                        <div>
                                            <h3
                                                className="mb-1 text-base font-semibold"
                                                style={{
                                                    color: isActive
                                                        ? report.color
                                                        : "#1E2A22",
                                                    fontFamily:
                                                        'Georgia, "Times New Roman", serif',
                                                }}
                                            >
                                                {report.title}
                                            </h3>

                                            <p
                                                className="text-sm leading-relaxed"
                                                style={{
                                                    color: "#5B6459",
                                                }}
                                            >
                                                {report.description}
                                            </p>

                                            {/* CLICK HINT */}

                                            <span
                                                className="mt-3 flex items-center gap-1 text-xs font-semibold opacity-80"
                                                style={{
                                                    color: report.color,
                                                }}
                                            >
                                                Click to explore
                                                <ArrowRight size={11} />
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReportsSection;