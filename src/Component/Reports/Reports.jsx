import React, { useState, useEffect, useRef } from 'react';
import {
    TrendingUp,
    BarChart3,
    BookUser,
    ShoppingBag,
} from 'lucide-react';

const REPORTS = [
    {
        id: 'profit-loss',
        code: 'P&L',
        title: 'Profit & Loss Report',
        description:
            'See your business\'s real profit at a glance sales, expenses and margins, all in one report.',
        color: '#C9A227',
        icon: TrendingUp,
        image: '/P&L Report.png',
    },
    {
        id: 'sales-report',
        code: 'SAL',
        title: 'Sales Report',
        description:
            'Track sales by day, week or month and see which item or customer is driving the most business.',
        color: '#3E8E7E',
        icon: BarChart3,
        image: '/Sales Report.png',
    },
    {
        id: 'party-ledger',
        code: 'LED',
        title: 'Party Ledger',
        description:
            'A complete record for every customer and supplier what\'s owed, what\'s paid, all in one place.',
        color: '#B5651D',
        icon: BookUser,
        image: '/Party Ledger.png',
    },
    {
        id: 'purchase-report',
        code: 'PUR',
        title: 'Purchase Report',
        description:
            'Keep a record of every purchase what you ordered from which supplier, and how much.',
        color: '#5B6E8C',
        icon: ShoppingBag,
        image: '/Purchase Report.png',
    },
];

const SLIDE_DURATION = 4000; // ms per report
const TICK = 40; // ms per progress tick

const ReportsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    const elapsedRef = useRef(0);
    const activeIndexRef = useRef(0);

    useEffect(() => {
        const id = setInterval(() => {
            elapsedRef.current += TICK;

            if (elapsedRef.current >= SLIDE_DURATION) {
                elapsedRef.current = 0;
                activeIndexRef.current = (activeIndexRef.current + 1) % REPORTS.length;
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

    const active = REPORTS[activeIndex];

    const renderImage = (report, extraClass = '') => (
        <div className={`relative w-full max-w-[420px] sm:max-w-[620px] md:max-w-[900px] aspect-[16/11] ${extraClass}`}>
            <img
                key={report.id}
                src={report.image}
                alt={report.title}
                className="absolute inset-0 w-full h-full object-contain"
                style={{ animation: 'fadeScale 0.6s cubic-bezier(0.22, 1, 0.36, 1)' }}
            />
        </div>
    );

    return (
        <section
            id="reports"
            className="relative w-full py-12 overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #0E3327 0%, #081F18 100%)' }}
        >
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-6">

                {/* Headline */}
                <div className="text-left max-w-2xl mb-10 sm:mb-14 md:mb-8">
                    <span
                        className="inline-block text-xs font-semibold tracking-[0.25em] uppercase mb-3 sm:mb-4 text-[#C9A227]"
                    >
                        Ledger &middot; Reports
                    </span>
                    <h2
                        className="text-2xl sm:text-3xl md:text-5xl font-bold leading-[1.15] tracking-tight text-[#FBF7EE]"
                    >
                        Everything You Need to Know About Your Business.
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg mt-3 sm:mt-4 leading-relaxed" style={{ color: '#9FB3A8' }}>
                        From profit to purchases every report is ready, without a single manual calculation.
                    </p>
                </div>

                {/* ================= MOBILE VIEW ================= */}
                <div className="flex md:hidden w-full flex-col gap-4">

                    {/* Top: First 2 Report Boxes */}
                    <div className="grid grid-cols-2 gap-3">
                        {REPORTS.slice(0, 2).map((report, index) => {
                            const Icon = report.icon;
                            const isActive = index === activeIndex;
                            const isDone = index < activeIndex;

                            return (
                                <button
                                    key={report.id}
                                    onClick={() => handleSelect(index)}
                                    className="group relative w-full bg-[#FBF7EE] rounded-xl overflow-hidden transition-all duration-300"
                                    style={{
                                        boxShadow: isActive
                                            ? `0 8px 20px -10px rgba(0,0,0,0.45), inset 0 0 0 2px ${report.color}`
                                            : 'inset 0 0 0 1px rgba(0,0,0,0.08)',
                                        transform: isActive
                                            ? 'scale(1.02)'
                                            : 'scale(1)',
                                        opacity: isActive ? 1 : 0.82,
                                    }}
                                >
                                    {/* Top Progress Bar */}
                                    <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-200">
                                        <div
                                            className="h-full"
                                            style={{
                                                width: isActive
                                                    ? `${progress}%`
                                                    : isDone
                                                        ? '100%'
                                                        : '0%',
                                                backgroundColor: report.color,
                                                transition: isActive
                                                    ? 'none'
                                                    : 'width 0.3s ease',
                                            }}
                                        />
                                    </div>

                                    <div className="flex items-center gap-3 px-3 py-4">

                                        {/* Icon */}
                                        <div
                                            className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border"
                                            style={{
                                                borderColor: report.color,
                                                backgroundColor: `${report.color}10`,
                                            }}
                                        >
                                            <Icon
                                                size={19}
                                                style={{ color: report.color }}
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="text-xs leading-tight text-left font-semibold"
                                            style={{
                                                color: '#1E2A22',
                                                fontFamily:
                                                    'Georgia, "Times New Roman", serif',
                                            }}
                                        >
                                            {report.title}
                                        </h3>
                                    </div>
                                </button>
                            );
                        })}
                    </div>


                    {/* Center: LARGE Active Report Image */}
                    <div className="w-full flex justify-center">
                        <img
                            key={active.id}
                            src={active.image}
                            alt={active.title}
                            className="block w-full h-auto object-contain"
                            style={{
                                animation:
                                    'fadeScale 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                            }}
                        />
                    </div>


                    {/* Bottom: Last 2 Report Boxes */}
                    <div className="grid grid-cols-2 gap-3">
                        {REPORTS.slice(2, 4).map((report, sliceIndex) => {
                            const index = sliceIndex + 2;
                            const Icon = report.icon;
                            const isActive = index === activeIndex;
                            const isDone = index < activeIndex;

                            return (
                                <button
                                    key={report.id}
                                    onClick={() => handleSelect(index)}
                                    className="group relative w-full bg-[#FBF7EE] rounded-xl overflow-hidden transition-all duration-300"
                                    style={{
                                        boxShadow: isActive
                                            ? `0 8px 20px -10px rgba(0,0,0,0.45), inset 0 0 0 2px ${report.color}`
                                            : 'inset 0 0 0 1px rgba(0,0,0,0.08)',
                                        transform: isActive
                                            ? 'scale(1.02)'
                                            : 'scale(1)',
                                        opacity: isActive ? 1 : 0.82,
                                    }}
                                >
                                    {/* Top Progress Bar */}
                                    <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-200">
                                        <div
                                            className="h-full"
                                            style={{
                                                width: isActive
                                                    ? `${progress}%`
                                                    : isDone
                                                        ? '100%'
                                                        : '0%',
                                                backgroundColor: report.color,
                                                transition: isActive
                                                    ? 'none'
                                                    : 'width 0.3s ease',
                                            }}
                                        />
                                    </div>

                                    <div className="flex items-center gap-3 px-3 py-4">

                                        {/* Icon */}
                                        <div
                                            className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border"
                                            style={{
                                                borderColor: report.color,
                                                backgroundColor: `${report.color}10`,
                                            }}
                                        >
                                            <Icon
                                                size={19}
                                                style={{ color: report.color }}
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="text-xs leading-tight text-left font-semibold"
                                            style={{
                                                color: '#1E2A22',
                                                fontFamily:
                                                    'Georgia, "Times New Roman", serif',
                                            }}
                                        >
                                            {report.title}
                                        </h3>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                </div>

                {/* ================= DESKTOP VIEW ================= */}
                <div className="hidden md:flex w-full items-start gap-16">

                    {/* Left: Report Image */}
                    <div className="w-[70%] justify-center sticky top-24">
                        {renderImage(active)}
                    </div>

                    {/* Right: 2x2 Ledger Card Grid */}
                    <div className="w-1/2 grid grid-cols-2 gap-4">
                        {REPORTS.map((report, index) => {
                            const Icon = report.icon;
                            const isActive = index === activeIndex;
                            const isDone = index < activeIndex;

                            return (
                                <button
                                    key={report.id}
                                    onClick={() => handleSelect(index)}
                                    className="group relative text-left rounded-md overflow-hidden transition-all duration-500 ease-out"
                                    style={{
                                        backgroundColor: '#FBF7EE',
                                        boxShadow: isActive
                                            ? `0 12px 30px -12px rgba(0,0,0,0.45), inset 0 0 0 1px ${report.color}55`
                                            : 'inset 0 0 0 1px rgba(0,0,0,0.06)',
                                        transform: isActive
                                            ? 'scale(1.02)'
                                            : 'scale(1)',
                                        opacity: isActive ? 1 : 0.82,
                                    }}
                                >
                                    {/* Left-edge Progress */}
                                    <div
                                        className="absolute left-0 top-0 h-full w-[5px]"
                                        style={{
                                            backgroundColor: `${report.color}2A`,
                                        }}
                                    >
                                        <div
                                            className="w-full"
                                            style={{
                                                height: isActive
                                                    ? `${progress}%`
                                                    : isDone
                                                        ? '100%'
                                                        : '0%',
                                                backgroundColor: report.color,
                                                transition: isActive
                                                    ? 'none'
                                                    : 'height 0.3s ease',
                                            }}
                                        />
                                    </div>

                                    <div className="flex flex-col items-start gap-2.5 pl-6 pr-5 py-6">

                                        <div className="flex items-center gap-2.5">
                                            <div
                                                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center border transition-transform duration-500"
                                                style={{
                                                    borderColor: report.color,
                                                    transform: isActive
                                                        ? 'scale(1.08)'
                                                        : 'scale(1)',
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
                                                className="text-[10px] font-semibold tracking-[0.2em] uppercase"
                                                style={{
                                                    color: report.color,
                                                    fontFamily:
                                                        'ui-monospace, SFMono-Regular, Menlo, monospace',
                                                }}
                                            >
                                                {report.code}
                                            </span>
                                        </div>

                                        <div>
                                            <h3
                                                className="font-semibold text-base mb-1"
                                                style={{
                                                    color: '#1E2A22',
                                                    fontFamily:
                                                        'Georgia, "Times New Roman", serif',
                                                }}
                                            >
                                                {report.title}
                                            </h3>

                                            <p
                                                className="text-sm leading-relaxed"
                                                style={{
                                                    color: '#5B6459',
                                                }}
                                            >
                                                {report.description}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeScale {
                    from { opacity: 0; transform: scale(0.94); }
                    to { opacity: 1; transform: scale(1); }
                }
                @media (prefers-reduced-motion: reduce) {
                    * { animation-duration: 0.001ms !important; }
                }
            `}</style>
        </section>
    );
};

export default ReportsSection;