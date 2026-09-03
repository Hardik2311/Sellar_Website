import React, { useState } from 'react';
import {
    BASIC_FEATURES,
    CATALOGUE_FEATURES,
    PRO_FEATURES
} from './PricingFeature';

const Pricing = () => {
    const [activeService, setActiveService] = useState('pos');

    const posFeatures = [
        ...new Set([...BASIC_FEATURES, ...PRO_FEATURES])
    ].map((f) => ({
        name: f,
        basic: BASIC_FEATURES.includes(f),
        pro: PRO_FEATURES.includes(f)
    }));

    const bothFeatures = [
        ...new Set([
            ...PRO_FEATURES,
            ...CATALOGUE_FEATURES
        ])
    ].map((f) => ({
        name: f,
        pro: true
    }));

    const catalogueFeatures = CATALOGUE_FEATURES.map((f) => ({
        name: f,
        pro: true
    }));

    const currentFeatures =
        activeService === 'pos'
            ? posFeatures
            : activeService === 'catalogue'
                ? catalogueFeatures
                : bothFeatures;

    const planLabels = {
        pos: {
            basic: 'POS Basic (Cal-C)',
            pro: 'POS Pro'
        },
        catalogue: {
            pro: 'Premium'
        },
        both: {
            pro: 'Enterprise'
        }
    };

    const pricing = {
        pos: {
            basic: '999',
            pro: '2,999',
            originalBasic: '1,999',
            originalPro: '3,999'
        },
        catalogue: {
            pro: '4,999',
            originalPro: '7,999'
        },
        both: {
            pro: '7,999',
            originalPro: '14,999'
        }
    };

    const theme = {
        pos: {
            accent: 'text-[#007EA7]',
            button: 'bg-[#007EA7] text-white shadow-lg shadow-cyan-500/20',
            hover: 'hover:text-[#007EA7] hover:bg-cyan-50',
            badge: 'bg-[#007EA7] text-white',
            softBg: 'bg-cyan-50/40',
            rowBg: 'bg-cyan-50/20'
        },
        catalogue: {
            accent: 'text-[#F97316]',
            button: 'bg-[#F97316] text-white shadow-lg shadow-orange-500/20',
            hover: 'hover:text-[#F97316] hover:bg-orange-50',
            badge: 'bg-[#F97316] text-white',
            softBg: 'bg-orange-50/40',
            rowBg: 'bg-orange-50/20'
        },
        both: {
            accent: 'text-yellow-600',
            button: 'bg-yellow-500 text-white shadow-lg shadow-yellow-500/20',
            hover: 'hover:text-yellow-600 hover:bg-yellow-50',
            badge: 'bg-yellow-500 text-white',
            softBg: 'bg-yellow-50/50',
            rowBg: 'bg-yellow-50/30'
        }
    };

    const activeTheme = theme[activeService];

    return (
        <section
            id="pricing"
            className="relative py-8 md:py-16 px-4 md:px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-violet-50/70 to-sky-50"
        >
            {/* Ambient Background */}
            <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-200/30 blur-3xl pointer-events-none" />

            <div className="absolute bottom-[-150px] right-[-100px] w-[450px] h-[450px] rounded-full bg-sky-200/30 blur-3xl pointer-events-none" />

            <div className="absolute top-1/2 left-[-180px] w-[350px] h-[350px] rounded-full bg-purple-100/40 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-8 md:mb-12">

                    <span className="inline-flex items-center px-4 py-1.5 mb-4 rounded-full bg-white/80 backdrop-blur border border-violet-200 text-violet-600 text-xs md:text-sm font-bold tracking-widest uppercase shadow-sm">
                        Flexible Pricing
                    </span>

                    <h2 className="text-3xl md:text-5xl font-black text-[#00171f] leading-tight">
                        Simple,{' '}
                        <span className="text-[#007EA7]">
                            Transparent
                        </span>{' '}
                        Pricing
                    </h2>

                    <p className="max-w-xl mx-auto mt-4 text-sm md:text-base text-slate-500 leading-relaxed">
                        Choose the right Sellar solution for your business and
                        get all the tools you need to grow.
                    </p>

                    {/* Service Tabs */}
                    <div className="mt-7 inline-flex max-w-full overflow-x-auto p-1.5 rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_12px_35px_rgba(76,29,149,0.10)]">

                        <button
                            onClick={() => setActiveService('pos')}
                            className={`whitespace-nowrap px-4 md:px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
                                activeService === 'pos'
                                    ? theme.pos.button
                                    : `text-slate-500 ${theme.pos.hover}`
                            }`}
                        >
                            POSI - Billing
                        </button>

                        <button
                            onClick={() => setActiveService('catalogue')}
                            className={`whitespace-nowrap px-4 md:px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
                                activeService === 'catalogue'
                                    ? theme.catalogue.button
                                    : `text-slate-500 ${theme.catalogue.hover}`
                            }`}
                        >
                            CATALOG - Digital Store
                        </button>

                        <button
                            onClick={() => setActiveService('both')}
                            className={`whitespace-nowrap px-4 md:px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
                                activeService === 'both'
                                    ? theme.both.button
                                    : `text-slate-500 ${theme.both.hover}`
                            }`}
                        >
                            Enterprise - Both
                        </button>

                    </div>
                </div>


                {/* Pricing Table */}
                <div className="relative bg-white/80 backdrop-blur-xl border border-white/80 rounded-2xl md:rounded-[2rem] shadow-[0_25px_70px_rgba(76,29,149,0.12)] overflow-hidden">

                    {/* Top Accent */}
                    <div
                        className={`h-1.5 w-full ${
                            activeService === 'pos'
                                ? 'bg-[#007EA7]'
                                : activeService === 'catalogue'
                                    ? 'bg-[#F97316]'
                                    : 'bg-yellow-500'
                        }`}
                    />

                    {/* Table Header */}
                    <div
                        className={`grid ${
                            activeService === 'both' ||
                            activeService === 'catalogue'
                                ? 'grid-cols-[1.5fr_1fr] md:grid-cols-[2.2fr_1fr]'
                                : 'grid-cols-[1.5fr_1fr_1fr] md:grid-cols-[2.2fr_1fr_1fr]'
                        } bg-gradient-to-r from-white via-violet-50/60 to-sky-50/60 border-b border-slate-200/70 sticky top-0 z-20`}
                    >

                        {/* Feature Header */}
                        <div className="p-4 md:p-10 border-r border-slate-200/70 flex flex-col justify-center">

                            <span className="text-[10px] md:text-xs font-extrabold text-slate-400 tracking-[0.15em] uppercase mb-2">
                                Compare Features
                            </span>

                            <h3
                                className={`text-xl md:text-3xl font-black tracking-tight ${activeTheme.accent}`}
                            >
                                {activeService === 'pos'
                                    ? 'POSI'
                                    : activeService === 'catalogue'
                                        ? 'Catalog'
                                        : 'Enterprise'}
                            </h3>

                        </div>


                        {/* Basic Plan */}
                        {activeService === 'pos' && (
                            <div className="p-4 md:p-8 text-center border-r border-slate-200/70 flex flex-col justify-center items-center">

                                <span className="block text-[10px] md:text-sm font-extrabold text-slate-500 tracking-wide mb-2">
                                    {planLabels.pos.basic}
                                </span>

                                <div className="flex flex-col">

                                    <span className="block text-xs md:text-lg font-bold text-slate-400 line-through">
                                        ₹{pricing.pos.originalBasic}
                                    </span>

                                    <span className="block text-xl md:text-4xl font-black text-[#00171f] leading-none">
                                        ₹{pricing.pos.basic}
                                    </span>

                                </div>

                                <p className="text-[10px] md:text-sm text-slate-400 mt-2">
                                    per year
                                </p>

                            </div>
                        )}


                        {/* Premium / Pro Plan */}
                        <div
                            className={`p-4 md:p-8 text-center relative ${activeTheme.softBg} flex flex-col justify-center items-center`}
                        >

                            {/* Best Seller Badge */}
                            <div
                                className={`absolute top-0 left-0 right-0 text-[9px] md:text-[11px] font-black py-1.5 tracking-widest uppercase ${activeTheme.badge}`}
                            >
                                Best Seller
                            </div>

                            <span className="block text-[10px] md:text-sm font-extrabold text-slate-600 tracking-wide mb-2 mt-4 md:mt-1">
                                {planLabels[activeService].pro}
                            </span>

                            <div className="flex flex-col">

                                <span className="block text-xs md:text-lg font-bold text-slate-400 line-through">
                                    ₹{pricing[activeService].originalPro}
                                </span>

                                <span className="block text-xl md:text-4xl font-black text-[#00171f] leading-none">
                                    ₹{pricing[activeService].pro}
                                </span>

                            </div>

                            <p className="text-[10px] md:text-sm text-slate-400 mt-2">
                                per year
                            </p>

                        </div>

                    </div>


                    {/* Table Body */}
                    <div className="max-h-[500px] md:max-h-[600px] overflow-y-auto">

                        {currentFeatures.map((f, i) => (
                            <div
                                key={i}
                                className={`grid ${
                                    activeService === 'both' ||
                                    activeService === 'catalogue'
                                        ? 'grid-cols-[1.5fr_1fr] md:grid-cols-[2.2fr_1fr]'
                                        : 'grid-cols-[1.5fr_1fr_1fr] md:grid-cols-[2.2fr_1fr_1fr]'
                                } border-b border-slate-100/80 last:border-0 hover:bg-violet-50/40 transition-colors duration-200`}
                            >

                                {/* Feature Name */}
                                <div className="p-3.5 md:p-6 text-[12px] md:text-[15px] font-semibold text-slate-700 border-r border-slate-100 flex items-center leading-tight">
                                    {f.name}
                                </div>


                                {/* Basic Availability */}
                                {activeService === 'pos' && (
                                    <div className="p-3 md:p-4 flex justify-center items-center border-r border-slate-100">

                                        {f.basic ? (
                                            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 text-sm md:text-base font-bold flex items-center justify-center">
                                                ✓
                                            </span>
                                        ) : (
                                            <span className="w-6 h-6 rounded-full bg-red-50 text-red-400 text-sm md:text-base font-bold flex items-center justify-center">
                                                ×
                                            </span>
                                        )}

                                    </div>
                                )}


                                {/* Pro Availability */}
                                <div
                                    className={`p-3 md:p-4 flex justify-center items-center ${activeTheme.rowBg}`}
                                >

                                    {f.pro ? (
                                        <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 text-sm md:text-base font-bold flex items-center justify-center">
                                            ✓
                                        </span>
                                    ) : (
                                        <span className="w-6 h-6 rounded-full bg-red-50 text-red-400 text-sm md:text-base font-bold flex items-center justify-center">
                                            ×
                                        </span>
                                    )}

                                </div>

                            </div>
                        ))}

                    </div>

                </div>


                {/* Footer Note */}
                <div className="mt-4 px-2">
                    <span className="italic text-slate-500 text-xs md:text-sm font-medium">
                        All prices exclude GST.
                    </span>
                </div>

            </div>
        </section>
    );
};

export default Pricing;